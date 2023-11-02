# Node Task Harness

A simple framework to maintain a stack of potentially interdependent node scripts locally.

## Background

In many positions in the past, I've found the need to write hundreds (at least) of scripted tooling to assist in development and business requests. "Can you get me a report that shows all the failed geolocations from the past two weeks?" might be an example of the latter. Data mining, data fixing, tools to ease the daily drudgery...

NodeJS can be a great option for these scripts in many cases no matter what the stack consists of. Unlike bash scripts or batchfiles, they're platform independent. However, writing them independently can means it's hard for other developers to understand how the scripts are used, assuming they even find out they exist!

## The solution

Node Task Harness gives you a place to write your various tasks, add dependencies, documentation and manage your org's secrets and constants. It streamlines tool-sharing on a team.

I recommend forking the main repo so you can maintain your own stack of tasks. But do feel welcome to submit PRs for what may be valuable additions to the primary stack.

## Limitations

Presently, this only supports a flat directory structure of tasks. It also supports command line arguments in the simplest way possible.

## Credit

This basic pattern was shown to me by a colleague, Darren Simmonds. I've been using it for personal projects for some time.
