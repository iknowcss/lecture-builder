var marked = require('marked')
  , fs     = require('fs')
  , _      = require('underscore')

  , lectureTemplate = './res/template.html'

  , inFile  = process.argv[2]
  , input
  , outFile = process.argv[3]
  , output;

// Monkey patch the marked object
require('./marked-monkey-patch')(marked);

// Ensure all arguments are specified
if (!_.isString(inFile)) {
  console.log('No input file specified');
  process.exit(2);
}
if (!_.isString(outFile)) {
  outFile = './output.html';
}

// Read the template file contents
try {
  lectureTemplate = fs.readFileSync(lectureTemplate).toString();
} catch (e) {
  console.log('Could not read template file "' + lectureTemplate + '"');
  process.exit(2);
}

// Read the input file contents
try {
  input = fs.readFileSync(inFile).toString();
} catch (e) {
  console.log('Could not read input file "' + inFile + '"');
  process.exit(2);
}

// Generate the output
output = _.template(lectureTemplate, {
  body      : marked(input)
});

// Save the output to a file
try {
  fs.writeFile(outFile, output);
} catch (e) {
  console.log('Could not write output file "' + outFile + '"');
  process.exit(2);
}