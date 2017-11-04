export const jobGetters = {
	allJobs: state => {
		return state.jobs
	},
	jobById: (state, getters) => id => {
		return getters.allJobs.filter(job => job._id === id)[0]
	}
}
export const activeTabGetters = {
	getActiveBoardTab: state => {
		return state.activeBoardTab
	}
}
export const jobForm = {
	jobFormApplication: state => {
		return state.jobForm
	}
}