# quantum-budget
Quantum Budget is a free and open-source budgeting app.

## Non-trivial Todo

### General

- Get a logo

### Ask a professsional

- How to create the DOM with JS using data from SQLite, and show a loading screen during this process

## Dev features:

### data-include and data-params

If a DOM element has the attribute `data-include="Something"`, and optionally `data-params="parameter1 ¤ parameter2 ¤ etc"`, the TemplateGenerator class' `GetSomething([parameter1, parameter2, etc])` will be called and placed **inside** of the DOM element having the attributes. The character `¤` is used because it doesn't appear in organic texts often.