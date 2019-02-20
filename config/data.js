const DIR = '/var/nodejs';
module.exports = {
   'github-hook': [
        {
            cwd: `${DIR}/github-hook`,
            script: 'npm run restart',
            branch: 'master'
        },
   ]
}
