"use strict";
function TaskAtHandApp(){
    var version = "v1.3";
    var appStorage = new AppStorage("taskAtHand");

    function saveTaskList() {
        var tasks = [];
        $("#task-list .task span.task-name").each(function() {
            tasks.push($(this).text());
        });
        appStorage.setValue("taskList", tasks);

    }
    this.start = function (){
        $("#new-task-name").keypress(function(e){
            if (e.which == 13) {    //Enter key
                addTask();
                return false;
            }
        }).focus();
        $("#app header").append(version);
        loadTaskList();
        setStatus("ready");
    
        $("#theme").change(onChangeTheme);
    }

    function onChangeTheme() {
        var theme = $("#theme>option").filter(":selected").val();
        setTheme(theme);
        appStorage.setValue("theme", theme);
    }
    function setTheme(theme) {
        $("#theme-style").attr("href", "themes/"+theme+".css");
    }

    function loadTheme() {
        var theme = appStorage.getValue("theme");
        if (theme) {
            setTheme(theme);
            $("#theme>option[value="+theme+"]").attr("selected", "selected");
        }
    }

    function setStatus(message){
        $("#app footer").text(message);
    }

    function addTask(){
        var taskName = $("#new-task-name").val();
        if (taskName) {
            addTaskElement(taskName);
            // Reset tehe text field
            $("#new-task-name").val("").focus();
        }
    }

    function addTaskElement(taskName) {
        //var $task = $("<li></li>");
        var $task = $("#task-template .task").clone();
        $("span.task-name", $task).text(taskName);
        //var $delete = $("<button class='delete'>X</button>");
        //var $moveUp = $("<button class='move-up'>^</button>");
        //var $moveDown = $("<button class='move-down'>v</button>");        
        //$task.append($delete)
        //    .append($moveUp)
        //    .append($moveDown)
        //    .append("<span class='task-name'>"+taskName+"</span>");
        $("#task-list").append($task);
        //$delete.click(function() {
        //    $task.remove();
        //});
        $("button.delete", $task).click(function() {
            //$task.remove();
            removeTask($task);
        });
        //$moveUp.click(function() {
        //    $task.insertBefore($task.prev());
        //});
        $("button.move-up", $task).click(function() {
            //$task.insertBefore($task.prev());
            moveTask($task, true);
        });
        //$moveDown.click(function() {
        //    $task.insertAfter($task.next());
        //});
        $("button.move-down", $task).click(function() {
            //$task.insertAfter($task.next());
            moveTask($task, false);
        });
        //$task.text(taskName);
        //$("#task-list").append($task);
        $("span.task-name", $task).click(function(){
            onEditTaskName($(this));
        });

        $task.click(function () { onSelectTask($task); });

        $("span.task-name", $task).change(function(){
            onChangeTaskName($(this));
        }).blur(function () {
            $(this).hide().siblings("span.task-name").show();
        });
    }

    function onSelectTask($task) {
        if ($task) {
            // Unselect other tasks
            $task.siblings(".selected").removeClass("selected");
            // Select this task
            $task.addClass("selected");
        }
    }

    function removeTask($task) {
        $task.remove();
        saveTaskList();
    }

    function moveTask($task, moveUp) {
        if (moveUp) {
            $task.insertBefore($task.prev());
        } else {
            $task.insertAfter($task.next());
        }
        saveTaskList();
    }

    function loadTaskList() {
        var tasks = appStorage.getObject("taskList");
        if (tasks) {
            for (var i in tasks) {
                addTaskElement(tasks[i]);
            }
        }
    }

    function onChangeTaskName($input) {
        $input.hide();
        var $span = $input.siblings("span.task-name");
        if ($input.val()) {
            $span.text($input.val());
        }
        $span.show();
    }

    function onEditTaskName($span) {
        $span.hide()
            .siblings("input.task-name")
            .val($span.text())
            .show()
            .focus();
    }

    
    
    /*this.start = function(){
        $("#app>header").append(version);
        setStatus("ready");
    }*/
}

$(function(){
    window.app = new TaskAtHandApp();
    window.app.start();
});

/*var MyApp = {
    version: "v1.0",
    setStatus: function (message){
        $("#app>footer").text(message);
    },
    start: function(){
        $("#app>header").append(this.version);
        this.setStatus("ready");
    }
}*/

//$(document).ready(handler);
//$(handler);
