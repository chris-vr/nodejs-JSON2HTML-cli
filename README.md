nodejs-JSON2HTML-cli
====================

A starting point for anybody looking to use node.js as a command line utility to convert JSON to HTML.

This a wrapper script for node.js that combines:
  https://github.com/moappi/node-json2html  and
  https://github.com/vavere/htmltidy

It also contains an example of nested arrays in the source json file.

To run:
  node J2H TestTransform TestFile

Notes:
  - The transform file contains JavaScript and not JSON.
    This is because it has to contain functions in the case of nested arrays in the source JSON file.
  - var transforms needs to contain a "main" member.
