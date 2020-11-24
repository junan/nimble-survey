const {writeFile} = require('fs');

// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const isProduction = process.env.NODE_ENV;
const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${process.env.NODE_ENV},
   apiBaseUrl: '${process.env.SURVEY_API_HOST}',
   apiClientId: '${process.env.SURVEY_API_CLIENT_ID}',
   apiClientSecret: '${process.env.SURVEY_API_CLIENT_SECRET}',
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});
