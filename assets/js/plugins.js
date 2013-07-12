/*!
 * zepto-tooltip - v1.1.1 - 2013-07-12
 * https://github.com/ptech/zepto-tooltip
 *
 * Copyright (c) 2013 Present Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(a){"use strict";var b,c=$("[rel~=tooltip]"),d=!1,e=!1;c.bind("mouseover",function(){if(d=$(this),b=d.attr("title"),e=$('<div class="tooltip"></div>'),!b||""===b)return!1;d.removeAttr("title"),e.css("opacity",0).html(b).appendTo("body");var c=function(){$(a).width()<1.5*e.width()?e.css("max-width",$(a).width()/2):e.css("max-width",340);var b=d.offset().left+d.width()/2-e.width()/2,c=d.offset().top-e.height()-20;0>b?(b=d.offset().left+d.width()/2-20,e.addClass("left")):e.removeClass("left"),b+e.width()>$(a).width()?(b=d.offset().left-e.width()+d.width()/2+20,e.addClass("right")):e.removeClass("right"),0>c?(c=d.offset().top+d.height(),e.addClass("top")):e.removeClass("top"),e.css({left:b,top:c}).animate({translateY:"10px",opacity:1},50)};c(),$(a).resize(c);var f=function(){e.animate({translateY:"-10px",opacity:0},50,"linear",function(){$(this).remove()}),d.attr("title",b)};d.bind("mouseout",f),e.bind("click",f)})}(window);