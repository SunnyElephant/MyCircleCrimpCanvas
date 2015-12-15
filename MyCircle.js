/**
 * Created by Administrator on 2015/12/15.
 */
function MyCircle(center_x, center_y, r, deltaX){
    this.R = r;
    this.centerX = center_x;
    this.centerY = center_y;
    this.deltaX = deltaX;
    this.getCirclePoints = function(){
        var points = new Array();
        var l = (r/deltaX);
        points.push(new Point(center_x, center_x+r));
        var deltax = 0;
        var deltay = 0;
        for(var i = 0;i< l;i++){
            deltax += deltaX;
            deltay = Math.sqrt(r*r - deltax*deltax);
            points.push(new Point(center_x + deltax, center_y + deltay));
        }
        var rightx = center_x + r;
        for(var i = 0;i<l;i++){
            rightx -= deltaX;
            deltay = Math.sqrt(r*r - (rightx-center_x)*(rightx-center_x));
            points.push(new Point(rightx, center_y - deltay));
        }
        deltax = 0;
        var bottomy = center_y - r;
        for(var i = 0;i<l;i++){
            deltax += deltaX;
            deltay = Math.sqrt(r*r - deltax*deltax);
            points.push(new Point(center_x - deltax, center_y - deltay));

        }
        var leftx = center_x - r;
        deltax = 0;
        for(var i = 0;i<l;i++){
            deltax += deltaX;
            deltay = Math.sqrt(r*r - (r - deltax)*(r - deltax));
            points.push(new Point(leftx + deltax, center_y + deltay));

        }
//        for(var i = 0; i < points.length; i++){
//            console.log(points[i]);
//        }
        return points;
    }
}

function Point(x,y){
    this.x = x;
    this.y = y;
}