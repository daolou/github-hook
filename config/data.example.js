const DIR = '/var/nodejs';
module.exports = {
   'github-hook': [
        {
            cwd: `${DIR}/github-hook`,
            script: 'npm run build',
            branch: 'master'
        },
        {
            cwd: `${DIR}/github-hook`,
            script: 'npm run build',
            branch: 'next'
        }
   ]
}