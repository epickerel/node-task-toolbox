# Node Task Toolbox

A simple framework to maintain a stack of potentially interdependent node scripts locally.

## Background

In many positions in the past, I've found the need to write hundreds (at least) of scripted tools to assist in development and business requests. "Can you get me a report that shows all the failed geolocations from the past two weeks?" might be an example of the latter. Data mining, data fixing, tools to ease the daily drudgery...

NodeJS can be a great option for these scripts in many cases no matter what the stack consists of. Unlike bash scripts or batchfiles, they're platform independent. However, writing them independently can means it's hard for other developers to understand how the scripts are used, assuming they even find out they exist!

## The solution

Node Task Toolbox gives you a place to write your various tasks, add dependencies, documentation and manage your org's secrets and constants. It streamlines tool-sharing on a team.

## Usage

I recommend forking the main repo so you can maintain your own stack of tasks. But do feel welcome to submit PRs for what may be valuable additions to the primary stack.

Setup:

```:bash
yarn
yarn task list
```

Usage:

```:bash
yarn task createTask argueWithMe "Engage in a five minute argument with the computer"
yarn task argueWithMe
```

Testing:

```:bash
yarn test
```

The script will always load a local `.env` file for your secrets. You can access them via `process.env` or optionally add them to `src/taskMgmt/constants.js` when you think you'll use them frequently. The same constants file can be used to store paths, common urls and other items that might get used often.

## Limitations

Presently, this only supports a flat directory structure of tasks, and only .js files. ECM has been adopted without use of transpilers. This involves some (for now) experimental Jest features.

## Credit

This basic pattern was shown to me by a colleague, Darren Simmonds. I've been using it for personal projects for some time.
