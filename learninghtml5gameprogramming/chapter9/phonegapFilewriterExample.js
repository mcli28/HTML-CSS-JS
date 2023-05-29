var paths = navigator.fileMgr.getRootPaths();
var writer = new FileWriter(paths[0] + "test.txt");
writer.write("writing some text");
writer.truncate(10);