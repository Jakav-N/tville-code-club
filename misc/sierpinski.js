/* Random unfinished work*/

let canvas = document.getElementById("canvas");

let cx = canvas.getContext("2d");
let canvas_width = Number(canvas.getAttribute("width"));
let canvas_height = Number(canvas.getAttribute("height"));

let tau = Math.PI * 2;

let angles = [tau/4, tau/4 + 1/3 * tau, tau/4 + 2/3 * tau];

function deeper(max_depth, current_depth, current_points = [0, 0]) {
    let new_points = [];

    if (current_depth < max_depth) {
        for (let point of current_points) {
            for (let angle of angles) {
                new_points.push([point[0] + Math.cos(angle) * 2 ** (-current_depth)])
            }
        }
    }
}

function draw (points) {

}

