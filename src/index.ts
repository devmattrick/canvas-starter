// Get canvas and canvas context
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Append canvas element to document body
document.body.appendChild(canvas);

// Handle resizing of canvas
function resize() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}

window.addEventListener('resize', resize);
resize();
