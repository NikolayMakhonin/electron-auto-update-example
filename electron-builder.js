import pass from 'pass.js'

module.exports = {
	appId: 'com.example.ElectronAutoUpdate',
	publish: {
		provider: 'github',
		token: pass.GitHubDeployToken,
	},
}