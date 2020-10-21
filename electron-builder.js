const pass = require('./pass')

module.exports = {
	appId: 'com.example.ElectronAutoUpdate',
	publish: {
		provider: 'github',
		token: pass.GitHubDeployToken,
	},
}