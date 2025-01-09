/* Random unfinished work*/

let canvas = document.getElementById("canvas");

let cx = canvas.getContext("2d");
let canvas_width = Number(canvas.getAttribute("width"));
let canvas_height = Number(canvas.getAttribute("height"));

let tau = Math.PI * 2;

let angles = [tau/4, tau/4 + 1/3 * tau, tau/4 + 2/3 * tau];
document.getElementById("test").textContent = "3940234";

function deeper(max_depth, current_depth, current_points = [0, 0]) {
    let new_points = [];
    for (let point of current_points) {
        for (let angle of angles) {
            new_points.push([point[0] + Math.cos(angle) * 2 ** (-current_depth), point[0] + Math.sin(angle) * 2 ** (-current_depth)])
        }
    }

    if (current_depth < max_depth) {
        return deeper(max_depth, current_depth + 1, new_points);
    } else {
        return new_points;
    }
}


function draw (points) {
    cx.fillStyle = "rgb(0,0,0)";
    for (point of points) {
        cx.fillRect(point[0] * 100 + 200, point[1] * 100 + 200, 1, 1);
    }
}

draw(deeper(10, 0))

