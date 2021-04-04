# Instruction

1. ```src/App.js```  is entry file you can register Provider or any wrapper in here.

2. ```src/App.css``` is global css. Any css input for global style have to register here.

3. ```src/layout``` this folder contain layout ex: Header, Footer, Nav. Compact all layout files to ```src/layout/index.js``` and export it.
4. ```src/components``` all component belongs to this folder. If component belongs to a group then have to create a folder to specified the group. All component have to register in ```src/components/index.js``` this file and export from here.

5. ```src/helpers``` all kind of extra function or logic have to be here. 
6. ```src/pages``` this folder contain all pages of application. The sub page component file have to follow this naming convension ex: ```SubSlider.js``` .
   ###### PageWrapper component must have to wrap all the pages
7. CSS for specific component and page should follow this naming convention css file for ```HomePage.js``` will be ```HomePage.css``` 
8. ``src/router`` will be the main route container.

### Redux with toolkit

1. ````src/redux```` his is the redux folder.  
2. ```src/redux/index.js``` redux store will export from here.
3. ```src/redux/rootReducer.js``` the ``combineReducer`` will export from here.
4. ``src/redux/slices`` this folder contain all slices. every slice should be named as ``index.js`` and the folder name should be meaningfull.

