mmo-roll
========

An extremely basic CLI utility that emulates the built-in roll functionality in MMOs like World of Warcraft. Though those games often use `/roll`, this uses `roll` or `\roll` to avoid your command being mistaken for trying to access a file.

Installation
============

You must already have node and npm installed in order to use this. After that, it's as easy as...

```bash
npm install -g mmo-roll
```

The `-g` flag is important. This ensures it is saved as a global npm library and not to your local directory.

Usage
=====

The most basic usage rolls a virtual d100, giving a value from one to a hundred, inclusive. The player with the highest score would then recieve the loot that is up for grabs.

```bash
roll
You rolled 86 (1-100)
```

If you provide a number after the command, that will be used as the maximum value of the roll, with 1 still being the minimum value.

```bash
roll 42
You rolled 37 (1-42)
```

Finally, providing two numbers separated by a hyphen or comma specifies a range with an arbitrary minimum as well.

```bash
roll 7-13
You rolled (7-13)
```

License (MIT)
=============

Copyright 2018-2020 Thorne N. Melcher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.