// @ts-check
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import type {Series, SeriesStore} from './types';

const twOpts = {
	duration: 1000,
	easing: cubicOut
};

function getProgressLabel(series): string {
	return series.reduce((acc, val) => {
		acc.push(val.perc + '%');
		return acc;
	}, []).join(' + ');
}

export function seriesStore(series: Array<Series>, props): SeriesStore {

	var labelForced = false;


	function getOpacityForSeries(s: Series, seriesIdx: number) {

		let opacity = null;

		if(props.thresholds && props.thresholds.length > 0) {
			const thres = props.thresholds.find((colInfo, idx) => (s.perc <= colInfo.till || idx == props.thresholds.length - 1));

			if(thres)
				opacity = thres.opacity;
		}

		if(!opacity) {

			if(series[seriesIdx] && series[seriesIdx].hasOwnProperty('opacity') && series[seriesIdx].opacity) {
				opacity = series[seriesIdx].opacity;
			}
			else {
				opacity=1;
			}
		}

		return opacity;
	};
	
	function getColorForSeries(s: Series, seriesIdx: number) {

		let color = null;

		if(props.thresholds && props.thresholds.length > 0) {
			const thres = props.thresholds.find((colInfo, idx) => (s.perc <= colInfo.till || idx == props.thresholds.length - 1));

			if(thres)
				color = thres.color;
		}

		if(!color) {

			if(series[seriesIdx] && series[seriesIdx].hasOwnProperty('color') && series[seriesIdx].color) {
				color = series[seriesIdx].color;
			}
			else {
				const colorTableMaxIndex = props.colors.length;
				color = props.colors[seriesIdx % colorTableMaxIndex];
			}
		}

		return color;
	};

	function series2storeData(s: any, idx: number): Series {

		let data: any = {};

		if(typeof s != 'object') {
			data = {perc: s};
		}
		else {
			data.perc = s.perc;
		}

		data.color = getColorForSeries(data, idx);
		data.prevOffset = 0;
		data.opacity  = getOpacityForSeries(data, idx);
		if(props.stackSeries)
			data.radius = 50 - props.thickness;
		else
			//data.radius = 50 - (idx + 1) * props.thickness - (idx > 0 ? props.margin : 0);

			data.radius = 50 - (idx + 1) * props.thickness - (idx > 0 ? props.margin : 3);
		return data;
	};

	if(!Array.isArray(series))
		series = [series];

	const { subscribe, set, update } = tweened({
		series: series.map((s, idx) => series2storeData({perc: 0}, idx)),
		overallPerc: 0,
		label: ''
	}, {
		...twOpts,
		interpolate: (from, to) => t => {

			const newSeries = [];

			let overallPerc = 0;
			const numFromSeries = from.series.length;
			const numToSeries = to.series.length;

			if(numFromSeries < numToSeries) {
				for(let i = numFromSeries; i < numToSeries; i++) {
					from.series.push(series2storeData(0, 0));
				}
			}
			else if(numFromSeries > numToSeries) {
				for(let i = numToSeries; i < numFromSeries; i++) {
					to.series.push(series2storeData(0, 0));
				}
			}

			from.series.forEach((sv, idx) => {
				const tv = to.series[idx];

				if(tv.perc > sv.perc) {
					newSeries[idx] = {
						perc: Math.round(sv.perc + (tv.perc - sv.perc) * t),
						prevOffset: sv.prevOffset + (tv.prevOffset - sv.prevOffset) * t,
					};
				}
				else {
					newSeries[idx] = {
						perc: Math.round(sv.perc - (sv.perc - tv.perc) * t),
						prevOffset: sv.prevOffset - (sv.prevOffset - tv.prevOffset) * t,
					};
				}

				newSeries[idx].color = getColorForSeries(newSeries[idx], idx);
				newSeries[idx].opacity = getOpacityForSeries(newSeries[idx], idx);
				overallPerc += newSeries[idx].perc;

				if(props.stackSeries)
					newSeries[idx].radius = 50 - props.thickness;
				else
					newSeries[idx].radius = 50 - (idx + 1) * props.thickness - (idx > 0 ? props.margin : 0);
			});

			if(overallPerc > 100)
				overallPerc = 100;

			return {
				series: newSeries,
				label: labelForced ? from.label : getProgressLabel(newSeries),
				overallPerc
			};
		}
	});

	return {
		subscribe,
		set,
		updateSeries: newSeries => {

			if(!Array.isArray(newSeries))
				newSeries = [newSeries];

			newSeries = newSeries.map(s => {

				if(typeof s != 'object')
					s = {perc: s};

				return s;
			});

			update(state => {

				const newState = {
					series: state.series.map(s => s),
					overallPerc: state.overallPerc,
					label: ''
				};

				newSeries.forEach((ns, idx) => {
					newState.series[idx] = series2storeData(ns, idx);
				});

				if(newSeries.length < state.series.length) {
					for(let i = newSeries.length; i < state.series.length; i++) {
						newState.series[i] = series2storeData(0, 0);
					}
				}

				let overallOffset = 0;
				newState.series.forEach(s => {
					s.prevOffset = overallOffset;
					overallOffset += s.perc;
				});

				newState.overallPerc = overallOffset;

				if(newState.overallPerc > 100)
					newState.overallPerc = 100;

				if(!labelForced)
					newState.label = getProgressLabel(newState.series);
				else
					newState.label = state.label;

				return newState;
			});

		},

		updateLabel: newLabel => {
			if(newLabel) {
				labelForced = true;
				update(state => {
					return {
						series: state.series.map(s => s),
						overallPerc: state.overallPerc,
						label: newLabel
					};
				});
			}
		}
	};

}
