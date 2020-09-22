let mapleader = ","

syntax on
set mouse=a
set clipboard=unnamedplus
set number
set relativenumber
set encoding=utf-8

"schuzman
set cursorline
set numberwidth=1
set showcmd
set noshowmode



"trabajo tabuladores
set shiftwidth=3
set tabstop=3
set expandtab
set autoindent
filetype indent on

"configuracion teclas
"para que ejecute en modo normal
inoremap <leader><leader> <Esc>A<Ctrl>y,
vnoremap <leader><leader> <Esc>A<Ctrl>y,
nnoremap <leader><leader> <Esc>A<Ctrl>y,
map W :w!<Enter>
nmap Q :q!<Enter>
nmap <Leader>py <Plug>(Prettier)
nmap <Leader>s <Plug>(easymotion-s2)
nmap <Leader>nt :NERDTreeFind<CR>
"nnoremap <F6> :setlocal spell! spelllang=es<Enter>

set t_Co=256 "for plug airline-load
call plug#begin()
"schuzman
Plug 'easymotion/vim-easymotion'
Plug 'mattn/emmet-vim'
Plug 'preservim/nerdtree'
Plug 'christoomey/vim-tmux-navigator'
"............

Plug 'tpope/vim-sensible'
"plugs front end https://github.com/VictorVoid/vim-frontend#javascript-es6-react
"SnipMatejs    https://github.com/grvcoelho/vim-javascript-snippets
Plug 'grvcoelho/vim-javascript-snippets'
Plug 'grvcoelho/vim-javascript-snippets'
    Plug 'MarcWeber/vim-addon-mw-utils'
    Plug 'tomtom/tlib_vim'
    Plug 'garbas/vim-snipmate'
"for plug airline-load
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
"for prittier
Plug 'prettier/vim-prettier', {
  \ 'do': 'yarn install',
  \ 'for': ['javascript', 'typescript', 'css', 'less', 'scss', 'json', 'graphql', 'markdown', 'vue', 'yaml', 'html'] }

"vim-jsx-pretty"
Plug 'maxmellon/vim-jsx-pretty'
"Recommended but no required React"
Plug 'yuezk/vim-js'
Plug 'maxmellon/vim-jsx-pretty'
"if you want to highlight tsx files"
Plug 'HerringtonDarkholme/yats.vim'
" or Plug 'leafgarland/typescript-vim'
Plug 'maxmellon/vim-jsx-pretty'
"Asynchronous Lint Engine"
"Plug 'dense-analysis/ale'"


call plug#end()

"-----confg prittier
" Max line length that prettier will wrap on: a number or 'auto' (use
" textwidth).
" default: 'auto'
let g:prettier#config#print_width = 'auto'

" number of spaces per indentation level: a number or 'auto' (use
" softtabstop)
" default: 'auto'
let g:prettier#config#tab_width = 'auto'

" use tabs instead of spaces: true, false, or auto (use the expandtab setting).
" default: 'auto'
let g:prettier#config#use_tabs = 'auto'

" flow|babylon|typescript|css|less|scss|json|graphql|markdown or empty string
" (let prettier choose).
" default: ''
let g:prettier#config#parser = ''

" cli-override|file-override|prefer-file
" default: 'file-override'
let g:prettier#config#config_precedence = 'file-override'

" always|never|preserve
" default: 'preserve'
let g:prettier#config#prose_wrap = 'preserve'

" css|strict|ignore
" default: 'css'
let g:prettier#config#html_whitespace_sensitivity = 'css'

" false|true
" default: 'false'
let g:prettier#config#require_pragma = 'false'
"------end of prittier

"----------------------------------Vundle
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')


Plugin 'frazrepo/vim-rainbow'
Plugin 'nathanaelkane/vim-indent-guides'
" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
" Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Install L9 and avoid a Naming conflict if you've already installed a
" different version somewhere else.
" Plugin 'ascenator/L9', {'name': 'newL9'}
"-----------------------------------------------me---------------------------->>>>
"snipmate
 Plugin 'MarcWeber/vim-addon-mw-utils'
  Plugin 'tomtom/tlib_vim'
  Plugin 'garbas/vim-snipmate'

  " Optional:
  Plugin 'honza/vim-snippets'
"https://github.com/ycm-core/YouCompleteMe
"Plugin 'ycm-core/YouCompleteMe'

"vim-JSX"
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'

"-----------------------------------------------endofMe
" All of your Plugins must be added before the following line
call vundle#end()            " required
let g:jsx_ext_required = 1









filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line     
