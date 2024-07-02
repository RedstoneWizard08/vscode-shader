# vscode-shader

[![GitHub issues](https://img.shields.io/github/issues/RedstoneWizard08/vscode-shader.png)](https://github.com/RedstoneWizard08/vscode-shader/issues)
[![GitHub license button](https://img.shields.io/github/license/RedstoneWizard08/vscode-shader.png)](https://github.com/RedstoneWizard08/vscode-shader/blob/master/LICENSE.md)
[![VS Code marketplace button](https://vsmarketplacebadge.apphb.com/installs/slevesque.shader.png)](https://marketplace.visualstudio.com/items/slevesque.shader)
[![Gitter chat button](https://img.shields.io/gitter/room/RedstoneWizard08/vscode-shader.png)](https://gitter.im/RedstoneWizard08/vscode-shader)

## Description

Shader languages support for VS Code

* `HLSL` - High-Level Shading Language
* `GLSL` - OpenGL Shading Language
* `Cg` - C for Graphics

## Main Features

### All languages

#### Syntax highlighting for shader languages
![Syntax Highlighting](images/syntax-highlight.png)

### HLSL

#### Show Code Completion Proposals
![Code Completion](images/code-completion.png)

#### Help With Function and Method Signatures
![Signature Help](images/signature-help.png)

#### Show Hover
![Show Hover](images/show-hover.png)

#### HLSL Documentation
![HLSL Documentation](images/hlsl-doc.png)
Clicking on the link in the Hover box will open HLSL documentation (when available)

#### Find References and Definition
![Find References](images/find-ref.png)

#### Document and Workspace Symbols
![document-symbols](images/document-symbols.png) ![workspace-symbols](images/workspace-symbols.png)

#### Formatting Code
*(Experimental)* Require [MS CppTools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) to be installed

## Configuration

* `hlsl.suggest.basic` Configures if the HLSL language suggestions are enabled
* `hlsl.openDocOnSide` Open HLSL Documentation link in editor and on the side, instead of in external browser

## Installation

1. Install *Visual Studio Code* (1.17.0 or higher)
2. Launch *Code*
3. From the command palette `Ctrl-Shift-P` (Windows, Linux) or `Cmd-Shift-P` (OSX)
4. Select `Install Extensions`
5. Choose the extension `Shader languages support for VS Code`
6. Reload *Visual Studio Code*

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Requirements

Visual Studio Code v1.17.0

## Credits

* [Visual Studio Code](https://code.visualstudio.com/)
* [vscode-docs on GitHub](https://github.com/Microsoft/vscode-docs)
* [Follow Redirects on GitHub](https://github.com/olalonde/follow-redirects)
* [HLSL Tools for Visual Studio](https://github.com/tgjones/HlslTools)
* [Sublime Text - GLSL Package](https://github.com/euler0/sublime-glsl)

## License

[MIT](LICENSE.md)
