"use strict";

let sceneConfig = [];
let sceneHistory = [];
let currentScene = 0;
let addToHistory = true;
let slideIndex = 1;

let map;
let radarMarker;
let markersScenes = [
  {
    lat: 43.893298,
    lng: -78.855614,
    title: "scene_one",
    scale: 1,
    zIndex: 100,
    scene: "scene_one",
  },
  {
    lat: 43.895832,
    lng: -78.860644,
    title: "scene_two",
    scale: 1,
    zIndex: 100,
    scene: "scene_two",
  },
  {
    lat: 43.898463,
    lng: -78.859812,
    title: "scene_three",
    scale: 1,
    zIndex: 100,
    scene: "scene_three",
  },
  {
    lat: 43.898848,
    lng: -78.858187,
    title: "scene_four",
    scale: 1,
    zIndex: 100,
    scene: "scene_four",
  },
  {
    lat: 43.899353,
    lng: -78.856105,
    title: "scene_five",
    scale: 1,
    zIndex: 100,
    scene: "scene_five",
  },
  {
    lat: 43.897891,
    lng: -78.862375,
    title: "scene_six",
    scale: 1,
    zIndex: 100,
    scene: "scene_six",
  },
  {
    lat: 43.896315,
    lng: -78.869339,
    title: "scene_seven",
    scale: 1,
    zIndex: 100,
    scene: "scene_seven",
  },
  {
    lat: 43.897069,
    lng: -78.860958,
    title: "scene_eight",
    scale: 1,
    zIndex: 100,
    scene: "scene_eight",
  },
  {
    lat: 43.886951,
    lng: -78.852976,
    title: "scene_nine",
    scale: 1,
    zIndex: 100,
    scene: "scene_nine",
  },
  {
    lat: 43.89932,
    lng: -78.864405,
    title: "scene_ten",
    scale: 1,
    zIndex: 100,
    scene: "scene_ten",
  },
  {
    lat: 43.89572,
    lng: -78.862793,
    title: "scene_eleven",
    scale: 1,
    zIndex: 100,
    scene: "scene_eleven",
  },
  {
    lat: 43.899598,
    lng: -78.872301,
    title: "scene_twelve",
    scale: 1,
    zIndex: 100,
    scene: "scene_twelve",
  },
];

/*let color = "#00aab1"; //EOIC-map-custompin_aqua.svg
let color = "#3F6EB6"; //EOIC-map-custompin_drkblue.svg
let color = "#41ABDA"; //EOIC-map-custompin_lightblue.svg
let color = "#A4CD39"; //EOIC-map-custompin_lime.svg
let color = "#8A5D8A"; //EOIC-map-custompin_purple.svg
let color = "#717ebd"; //EOIC-map-custompin_peri.svg*/

let markersPOI = [
  // {
  // 	title: 'Lakeridge Health',
  // 	category: 'Industry',
  // 	lat: 43.90549426849046,
  // 	lng: -78.86922999674603,
  // 	pitch: -4,
  // 	yam: 79,
  // 	icon: 'svg/EOIC-map-custompin_drkblue.svg',
  // 	additional_info: ''
  // },
  // {
  // 	title: 'Invest Durham',
  // 	category: 'Economic Development',
  // 	lat: 43.898603017408085,
  // 	lng: -78.9403042737303,
  // 	pitch: -1.4393769043418687,
  // 	yam: 12.068552548347423,
  // 	icon: 'svg/EOIC-map-custompin_aqua.svg',
  // 	additional_info:
  // 		'' +
  // 		"<div style='height: auto;'>\n" +
  // 		"<div id='images-section'>" +
  // 		"<a class='carousel-prev' onclick='prevSlides()'>&#10094;</a>" +
  // 		"<div id='carousel-container'>" +
  // 		'</div>' +
  // 		"<a class='carousel-next' onclick='nextSlides()'>&#10095;</a>" +
  // 		'</div>' +
  // 		'<br>\n' +
  // 		"<div style='width:100%;text-align: center;'>\n" +
  // 		"  <div style='display: inline-block;width: 33%;border-radius: 2px 2px;'><button style='width: 100%;' onclick='openWebsite(\"https://InvestDurham.ca\",\"_blank\")'>Website</button></div>\n" +
  // 		"  <div style='display: inline-block;width: 32%;border-radius: 2px 2px;'><button style='width: 100%;' onclick='openWebsite(\"https://www.youtube.com/watch?v=_6-syMQv6wE&list=PLrsBYM68qC0Pd3lxo15mGhH9mCVRIf8bW\",\"_blank\")'>Video</button></div>\n" +
  // 		"  <div style='display: inline-block;width: 33%;border-radius: 2px 2px;'><button style='width: 100%;' onclick='openWebsite(\"\",\"_blank\")'>PDF</button></div>\n" +
  // 		'</div>\n' +
  // 		"<div style='color: black;font-family: Arimo;text-align: justify;text-justify: inter-word;'>\n" +
  // 		'<p>We’re confident our innovation community will continue to change the world.</p>\n' +
  // 		'<p>Invest Durham is committed to working with others who share our vision of building a modern innovation economy in Durham. Collaboration between industry, post-secondary institutions, government and innovation centres, alongside a robust talent pipeline, positions Durham Region to be at the forefront of innovation in Canada—and the world.</p>\n' +
  // 		'<p>Located in the Greater Toronto Area, Durham Region is made up of eight local area municipalities, including the cities of Oshawa and Pickering; the towns of Ajax and Whitby; the Municipality of Clarington; and the townships of Brock, Scugog and Uxbridge.</p>\n' +
  // 		'<p>We are your first point of contact to navigate decisions required for investment and expansion in the region. We offer personalized support from business plans through to growth and expansion. We are confident our team will be able to support your business expansion in Durham Region.</p>\n' +
  // 		'</div>\n' +
  // 		'</div>',
  // 	images: [
  // 		{ src: 'img/invest_durham/Invest_Durham_1.png', position: 1, caption: '' },
  // 		{ src: 'img/invest_durham/Invest_Durham_2.jpg', position: 2, caption: '' }
  // 	]
  // },
];

let markersBuildings = [];
let infowindowCtrl = null;

let currentBuildingCtrl = 0;
let markerCurrent = [];

let radar_icon = {
  path: "M0,0 v-50 a-50,50 0 0,1 50,50 z",
  fillColor: "#00ff00",
  fillOpacity: 0.8,
  scale: 1,
  rotation: 0,
  strokeWeight: 0,
  strokeColor: "#00ff00",
};

const svgMarkerScene = {
  path: "m 0,-32 c -5.96089,0 -10.81055,4.84966 -10.81055,10.81056 0,7.49222 10.82118,20.29043 10.82118,20.29043 0,0 10.799933,-13.16666 10.799933,-20.29043 0,-5.9609 -4.849473,-10.81056 -10.810563,-10.81056 z m 3.26177,13.9759 c -0.89939,0.8992 -2.08048,1.3489 -3.26177,1.3489 -1.18109,0 -2.36256,-0.4497 -3.26157,-1.3489 -1.7986,-1.79841 -1.7986,-4.72476 0,-6.52335 0.87091,-0.8713 2.02942,-1.35118 3.26157,-1.35118 1.23216,0 2.39048,0.48007 3.26177,1.35118 1.7986,1.79859 1.7986,4.72494 0,6.52335 z m 0,0",
  fillColor: "#ea1d2e",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.2,
};

const svgMarkerPOI = {
  path: "m 0,-32 c -5.96089,0 -10.81055,4.84966 -10.81055,10.81056 0,7.49222 10.82118,20.29043 10.82118,20.29043 0,0 10.799933,-13.16666 10.799933,-20.29043 0,-5.9609 -4.849473,-10.81056 -10.810563,-10.81056 z m 3.26177,13.9759 c -0.89939,0.8992 -2.08048,1.3489 -3.26177,1.3489 -1.18109,0 -2.36256,-0.4497 -3.26157,-1.3489 -1.7986,-1.79841 -1.7986,-4.72476 0,-6.52335 0.87091,-0.8713 2.02942,-1.35118 3.26157,-1.35118 1.23216,0 2.39048,0.48007 3.26177,1.35118 1.7986,1.79859 1.7986,4.72494 0,6.52335 z m 0,0",
  fillColor: "#00aab1",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.2,
};

const svgMarkerEconomicOpportunities = {
  path: "m 0,-32 c -5.96089,0 -10.81055,4.84966 -10.81055,10.81056 0,7.49222 10.82118,20.29043 10.82118,20.29043 0,0 10.799933,-13.16666 10.799933,-20.29043 0,-5.9609 -4.849473,-10.81056 -10.810563,-10.81056 z m 3.26177,13.9759 c -0.89939,0.8992 -2.08048,1.3489 -3.26177,1.3489 -1.18109,0 -2.36256,-0.4497 -3.26157,-1.3489 -1.7986,-1.79841 -1.7986,-4.72476 0,-6.52335 0.87091,-0.8713 2.02942,-1.35118 3.26157,-1.35118 1.23216,0 2.39048,0.48007 3.26177,1.35118 1.7986,1.79859 1.7986,4.72494 0,6.52335 z m 0,0",
  fillColor: "#67e107",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1,
};

document.getElementById("showNavMenu").addEventListener("click", function () {
  if (
    document.getElementById("viewsDiv").style.display === "none" ||
    document.getElementById("viewsDiv").style.display === ""
  ) {
    document.getElementById("viewsDiv").style.display = "grid";
    document.getElementById("showNavMenu").innerHTML =
      '<i class="material-icons" style="font-size: 16px;">expand_more</i><span class="nav-menu-button-text"> Hide</span>';

    document.getElementById("showNavMenu2").innerHTML =
      '<i class="material-icons" style="font-size: 16px;">expand_less</i><span class="nav-menu-button-text"> Buildings</span>';
  } else {
    document.getElementById("viewsDiv").style.display = "none";
    document.getElementById("showNavMenu").innerHTML =
      '<i class="material-icons" style="font-size: 16px;">expand_less</i><span class="nav-menu-button-text"> Views</span>';
  }
});

//Resize Maps View - Ghost Bar Handler
$("#map_button_wrapper").mousedown(function (e) {
  e.preventDefault();
  let container = document.getElementById("main-wrapper");
  let main = $("#main-wrapper");
  let ghostbar = $("<div>", {
    id: "ghostbar",
    css: {
      height: main.outerHeight(),
      top: main.offset().top,
      left: main.offset().left,
    },
  }).appendTo("#main-wrapper");

  $(document).mousemove(function (e) {
    let mainPercentage = (e.pageX / container.clientWidth) * 100;
    if (mainPercentage >= 70) {
      ghostbar.css("left", e.pageX + 2);
    }
  });
});

$(function () {
  $("#resizable").resizable();
});

$(document).mouseup(function (e) {
  if (isResizing) {
    $("#ghostbar").remove();
    $(document).unbind("mousemove");
  }
});

let isResizing = false;
let startResize = 0;

//Resize Maps View - Handlers
(function () {
  let container = document.getElementById("main-wrapper"),
    left = document.getElementById("view-wrapper"),
    right = document.getElementById("map-wrapper"),
    handle = document.getElementById("map_button_wrapper");

  let resizingStarts = function (e) {
    isResizing = true;
    startResize = right.style.width === "70%" ? 70 : 0;
    document.getElementById("panorama").style.marginLeft = "0";
    right.style.display = "none";
  };

  let moveResizingMap = function (e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
      return;
    }
    let mainPercentage = (e.pageX / container.clientWidth) * 100;
    let percentage = 100 - mainPercentage;

    //Only show Map if percentage of Screen > 3%
    percentage = percentage < 3 ? 0 : percentage;
    mainPercentage = mainPercentage > 97 ? 100 : mainPercentage;

    //Limits Map view to 30%
    if (mainPercentage >= 65) {
      left.style.width = mainPercentage + "%";
      right.style.width = percentage + "%";
    }
  };

  let resizingEnds = function (e) {
    // stop resizing
    if (isResizing) {
      let mainPercentage = (e.pageX / container.clientWidth) * 100;
      let percentage = 100 - mainPercentage;
      percentage = percentage < 3 ? 0 : percentage;

      right.style.display = "block";

      //Off Set Panorama to show Middle of Render - Reduces Distortion on side with Maps View Open.
      document.getElementById("panorama").style.marginLeft =
        -(percentage / 2) + "%";
    }
    isResizing = false;
    document.getElementById("ghostbar").style.display = "none";
  };

  let onClickResize = function (e) {
    if (!isResizing) {
      let percentage = startResize === 65 ? 0 : 65;

      left.style.width = (percentage === 0 ? 100 : 65) + "%";
      right.style.width = (parseInt(left.style.width, 10) < 100 ? 35 : 0) + "%";
      right.style.display =
        parseInt(right.style.width, 10) > 0 ? "block" : "none";
      /*console.log(right.style.width);
			console.log(percentage);
			console.log(left.style.width);
			console.log(parseInt(right.style.width,10));*/

      //Off Set Panorama to show Middle of Render - Reduces Distortion on side with Maps View Open.
      document.getElementById("panorama").style.marginLeft =
        -(percentage / 3) + "%";
    }
  };

  handle.ontouchstart = resizingStarts;
  handle.onmousedown = resizingStarts;

  handle.onclick = onClickResize;

  document.ontouchmove = moveResizingMap;
  document.onmousemove = moveResizingMap;

  document.ontouchend = resizingEnds;
  document.onmouseup = resizingEnds;
})();

//Show  Image
let showImg = function (params, data) {
  document.getElementById("myModal2").style.display = "inline";
  document.getElementById("myModal2").style.zIndex = "6";
  document.getElementById("img01").style.display = "block";
  document.getElementById("img01").src = data[0];
  document.getElementById("caption").innerHTML = data[1];
};

//Save Scene Config
let saveScene = function () {
  if (viewer.getScene() !== viewer.getConfig().firstScene)
    sceneConfig.push([
      viewer.getScene(),
      viewer.getPitch(),
      viewer.getYaw(),
      viewer.getHfov(),
    ]);
};

// Create viewer
let viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "scene_one",
    sceneFadeDuration: 1000,
  },

  scenes: {
    scene_one: {
      title: "Scene One",
      type: "equirectangular",
      panorama: "tiles/1.JPG",
      pitch: -4.8,
      yaw: 2,
      hfov: screen.width > 640 ? 84 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: -60,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [
        {
          pitch: -12.4,
          yaw: -31.113,
          type: "scene",
          text: "Scene Two",
          sceneId: "scene_two",
					cssClass: 'hotspot_size oshawa-icon',
					createTooltipFunc: hotspot,
					createTooltipArgs: 'Scene Two',
					clickHandlerFunc: saveScene,
        },
        {
          pitch: -6.9,
          yaw: 185.235,
          type: "scene",
          text: "Scene Nine",
          sceneId: "scene_nine",
					cssClass: 'hotspot_size oshawa-icon',
					createTooltipFunc: hotspot,
					createTooltipArgs: 'Scene Nine',
					clickHandlerFunc: saveScene,
        },
      ],
    },
    scene_two: {
      title: "Scene Two",
      type: "equirectangular",
      panorama: "tiles/2.JPG",
      pitch: -4,
      yaw: -90,
      hfov: screen.width > 640 ? 84 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 35,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [
        {
          pitch: -6.3,
          yaw: 52.414,
          type: "scene",
          text: "Scene One",
          sceneId: "scene_one",
					cssClass: 'hotspot_size oshawa-icon',
					createTooltipFunc: hotspot,
					createTooltipArgs: 'Scene One',
					clickHandlerFunc: saveScene,
        },
        {
          pitch: -23.4,
          yaw: -82.842,
          type: "scene",
          text: "Scene Eight",
          sceneId: "scene_Eight",
					cssClass: 'hotspot_size oshawa-icon',
					createTooltipFunc: hotspot,
					createTooltipArgs: 'Scene Eight',
					clickHandlerFunc: saveScene,
        },
        {
          pitch: -19.6,
          yaw: -163.749,
          type: "scene",
          text: "Scene Eleven",
          sceneId: "scene_eleven",
					cssClass: 'hotspot_size oshawa-icon',
					createTooltipFunc: hotspot,
					createTooltipArgs: 'Scene Eleven',
					clickHandlerFunc: saveScene,
        },
      ],
    },
    scene_three: {
      title: "Scene Three",
      type: "equirectangular",
      panorama: "tiles/3.JPG",
      pitch: -2.5,
      yaw: 1.2,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 180,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [],
    },
    scene_four: {
      title: "Scene Four",
      type: "equirectangular",
      panorama: "tiles/4.JPG",
      pitch: -18,
      yaw: 0,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: -140,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [],
    },
    scene_five: {
      title: "Scene Five",
      type: "equirectangular",
      panorama: "tiles/5.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: -100,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [],
    },
    scene_six: {
      title: "Scene Six",
      type: "equirectangular",
      panorama: "tiles/6.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 30,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
    scene_seven: {
      title: "Scene Seven",
      type: "equirectangular",
      panorama: "tiles/7.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 40,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
    scene_eight: {
      title: "Scene Eight",
      type: "equirectangular",
      panorama: "tiles/8.JPG",
      pitch: -31,
      yaw: -6.9,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 80,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: true,
      hotSpots: [],
    },
    scene_nine: {
      title: "Scene Nine",
      type: "equirectangular",
      panorama: "tiles/9.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: -50,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
    scene_ten: {
      title: "Scene Ten",
      type: "equirectangular",
      panorama: "tiles/10.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 120,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
    scene_eleven: {
      title: "Scene Eleven",
      type: "equirectangular",
      panorama: "tiles/11.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: -130,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
    scene_twelve: {
      title: "Scene Twelve",
      type: "equirectangular",
      panorama: "tiles/12.JPG",
      pitch: -12,
      yaw: 32,
      hfov: screen.width > 640 ? 100 : 40,
      maxHfov: 120,
      minHfov: 20,
      maxPitch: 60,
      minPitch: -90,
      vaov: 180,
      vOffset: 0,
      northOffset: 80,
      scale: false,
      horizonPitch: 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: [],
    },
  },
});

//Populate views and save scene config
let views = viewer.getConfig().scenes;
for (let scene in views) {
  if (views[scene].title !== "Eastern Ontario Innovation Corridor") {
    document.getElementById("viewsDiv").innerHTML =
      document.getElementById("viewsDiv").innerHTML +
      '<div class="ctrl" id="' +
      scene +
      '">' +
      views[scene].title +
      "</div>";
    sceneConfig.push({
      scene: scene,
      yam: views[scene].yaw,
      pitch: views[scene].pitch,
      hfov: views[scene].hfov,
    });
  }
}

// //Set Home Button
// document.getElementById('home_button').onclick = function () {
// 	//loadScene(viewer.getConfig().firstScene);
// 	loadScene('simcoe_st_s');
// };

/**
 * It takes the lat and lng of the marker that was clicked on the map and then loops through the
 * markers on the map to find the one that matches the lat and lng of the marker that was clicked on
 * the map.
 *
 * Once it finds the matching marker, it triggers the click event on that marker.
 *
 * The click event on the marker is what opens the infowindow.
 * @param e - the event object
 * @param args - [0] = index of the marker in the array of markers
 */
function showMarker(e, args) {
  console.log(args);
  let currentBuilding = markersPOI[args[0]];

  viewer.lookAt(args[1], args[2]);

  if (infowindowCtrl != null) infowindowCtrl.close();

  for (let i = 0; i < map.markers.length; i++) {
    let selectedMarker = map.markers[i];
    if (
      currentBuilding.lat === selectedMarker.getPosition().lat() &&
      currentBuilding.lng === selectedMarker.getPosition().lng()
    )
      google.maps.event.trigger(map.markers[i], "click");
  }
}

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  //Top Icon
  hotSpotDiv.classList.add("tooltipName");
  let spanTop = document.createElement("span");
  spanTop.innerHTML = args; //Add content to it
  hotSpotDiv.appendChild(spanTop);
  spanTop.style.width = spanTop.scrollWidth - 20 + "px";
  spanTop.style.marginLeft =
    -(spanTop.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  spanTop.style.marginTop = -spanTop.scrollHeight - 12 + "px";
}

function hotspotArrow(hotSpotDiv, args) {
  //Arrow Hotspot
  hotSpotDiv.classList.add("custom-tooltip");
  let spanLine = document.createElement("div");
  spanLine.classList.add("custom-hotspot-line");
  spanLine.style.width = args[1] + "vmax";
  spanLine.style.backgroundColor = "#ea1d2e";
  spanLine.style.transform =
    "translate(calc(" +
    (screen.width > 640 ? args[1] * 3 : args[1] * 6) +
    "vmax + 1vmin), calc(-" +
    args[2] +
    "vmax + 1vmin";
  spanLine.style.height = "calc(" + args[2] + "vmax + 1vmin)";
  hotSpotDiv.appendChild(spanLine);
  let divText = document.createElement("div");
  divText.classList.add("custom-hotspot-line");
  divText.innerHTML = args[0];
  divText.style.width = "max-content";
  divText.style.color = "black";
  divText.style.fontSize = screen.width > 840 ? "1vmax" : "2vmax";
  divText.style.transform =
    "translate(calc(" +
    (screen.width > 640 ? args[1] * 3 : args[1] * 6) +
    "vmax + 1vmin), calc(-" +
    args[2] * 2.3 +
    "vmax + 1vmin";
  hotSpotDiv.appendChild(divText);
  divText.style.marginLeft = -divText.offsetWidth / 2 + "px"; //Get calculated width of Span and apply as marginLeft
}

// Create Hotspot with Icons
function hotspotIcons(hotSpotDiv, args) {
  //Tool Tip
  hotSpotDiv.classList.add("tooltipName");
  let spanTopToolTip = document.createElement("span");
  spanTopToolTip.innerHTML = args[0]; //Add content to it
  hotSpotDiv.appendChild(spanTopToolTip);
  spanTopToolTip.classList.add("icon_hotspot_tooltip");

  //Top Right Icon - PDF
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanTopRight = document.createElement("div");
  let iconTopRight = document.createElement("i");

  //Check if args[1] is a web URL or a PDF and change icon accordingly
  if (args[1].includes(".pdf")) {
    iconTopRight.classList.add("material-icons");
    iconTopRight.title = "View PDF";
    iconTopRight.innerHTML = "picture_as_pdf";
  } else {
    iconTopRight = document.createElement("img");
    iconTopRight.title = "View WebSite";
    iconTopRight.src = "svg/picture_as_web.svg";
    iconTopRight.style.width = "4vmax";
    iconTopRight.style.cursor = "pointer";
  }

  // Onclick to check if PDF exists and open it
  iconTopRight.onclick = function () {
    if (args[1] != "") {
      closeImg();
      let isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
      if (!isMobileDevice) showIframe(args[0], args[1]);
      else window.open(args[1]);
    }
  };

  spanTopRight.appendChild(iconTopRight);
  spanTopRight.classList.add("icon_top_right");
  hotSpotDiv.appendChild(spanTopRight);

  // Onclick to check if PDF exists and open it
  iconTopRight.onclick = function () {
    if (args[1] != "") {
      closeImg();
      let isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

      if (!isMobileDevice) {
        showIframe(args[0], args[1]);
      } else {
        window.open(args[1]);
      }
    }
  };

  //Top Left Icon - Info
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanTopLeft = document.createElement("div");
  let iconTopLeft = document.createElement("i");
  iconTopLeft.classList.add("material-icons");
  iconTopLeft.title = "Show Info";

  iconTopLeft.innerHTML = "content_paste";
  spanTopLeft.appendChild(iconTopLeft);
  spanTopLeft.classList.add("icon_top_left");
  hotSpotDiv.appendChild(spanTopLeft);

  // Onclick to check if info exists and open it
  iconTopLeft.onclick = function () {
    if (args[2] != "") {
      closeImg();
      showInfo(args[2]);
      selectLanguage($("#languageSelect").val());
    }
  };

  //Right Icon - Video
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanRight = document.createElement("div");
  let iconRight = document.createElement("i");
  iconRight.classList.add("material-icons");
  iconRight.title = "Show Video";

  // Onclick to check if video exists and open it
  iconRight.onclick = function () {
    if (args[3] != "") {
      closeImg();
      showIframe("Video Player", args[3]);
    }
  };

  iconRight.innerHTML = "smart_display";
  spanRight.appendChild(iconRight);
  spanRight.classList.add("icon_right");
  hotSpotDiv.appendChild(spanRight);

  //Left Icon - Image Gallery
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanLeft = document.createElement("div");
  let iconLeft = document.createElement("i");
  iconLeft.classList.add("material-icons");
  iconLeft.title = "Show Gallery";
  iconLeft.onclick = function () {
    closeImg();
    slideIndex = 1;
    openGallery(args[4]);
  };
  iconLeft.innerHTML = "image";
  spanLeft.appendChild(iconLeft);
  spanLeft.classList.add("icon_left");
  hotSpotDiv.appendChild(spanLeft);

  // If content does not exist hide button
  if (args[1] == "") {
    iconTopRight.style.display = "none";
  }
  if (args[2] == "") {
    iconTopLeft.style.display = "none";
  }
  if (args[3] == "") {
    iconRight.style.display = "none";
  }
  if (args[4] == "") {
    iconLeft.style.display = "none";
  }
}

//Open Gallery Function
let openGallery = function (imgGallery) {
  let innerHTML = "";
  //foreach Add Images
  for (let i = 0; i < imgGallery.length; i++) {
    innerHTML =
      innerHTML +
      '<div class="mySlides"><div class="numbertext">' +
      imgGallery[i].position +
      "/" +
      imgGallery.length +
      "</div>" +
      '<img class="mySlidesImg" src="' +
      imgGallery[i].src +
      '" alt=""></div>';
  }
  document.getElementById("content_gallery").innerHTML = innerHTML;
  document.getElementById("myModalGallery").style.display = "block";
  showSlides(1);
};

//Open carousel in info box
let openCarousel = function (imgGallery) {
  // Make prev and next buttons visible if there are more than one image
  if (imgGallery.length <= 1) {
    document.getElementsByClassName("carousel-next")[0].style.display = "none";
    document.getElementsByClassName("carousel-prev")[0].style.display = "none";
  } else {
    document.getElementsByClassName("carousel-next")[0].style.display = "block";
    document.getElementsByClassName("carousel-prev")[0].style.display = "block";
  }

  let innerHTML = "";
  //foreach Add Images
  for (let i = 0; i < imgGallery.length; i++) {
    innerHTML =
      innerHTML +
      '<div class="mySlides">' +
      imgGallery[i].position +
      "/" +
      imgGallery.length +
      '<img class="mySlidesImg" style="max-width: 100%" src="' +
      imgGallery[i].src +
      '" alt=""></div>';
  }
  document.getElementById("carousel-container").innerHTML = innerHTML;

  //document.getElementById("myModalGallery").style.display = "block";
  showSlides(1);
};

// Close the Gallery Modal
let closeGallery = function () {
  document.getElementById("myModalGallery").style.display = "none";
  document.getElementById("content_gallery").innerHTML = "";
};

// Next/previous controls
let nextSlides = function () {
  showSlides((slideIndex += 1));
};
let prevSlides = function () {
  showSlides((slideIndex += -1));
};

//Show slides Gallery
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

//Hotspot Icon Actions - Iframe
let showIframe = function (iframeTitle, iframeSrc) {
  document.getElementById("myModal2").style.display = "inline";
  document.getElementById("myModal2").style.zIndex = "6";
  document.getElementById("video01").style.display = "block";
  document.getElementById("video01").src = iframeSrc;
  document.getElementById("video01").title = iframeTitle;
  document.getElementById("caption").innerHTML = "";
};

//Hotspot Icon Actions - Info
let showInfo = function (inner_html) {
  document.getElementById("myModalInfo").style.display = "flex";
  document.getElementById("myModalInfo").style.zIndex = "6";
  document.getElementById("modal_info_span").innerHTML = inner_html;
};

//Hotspot Icon Actions - Close Info
function closeInfo() {
  document.getElementById("myModalInfo").style.display = "none";
}

document.getElementById("myModalInfo").addEventListener("click", function () {
  closeInfo();
});

//Close Info Modal
function closeImg() {
  // Close Map if open and currently in a scene
  if (viewer.getScene() !== "pano_load") {
    document.getElementById("myModal").style.display = "none";
  }
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("video01").style.display = "none";
  document.getElementById("video01").src = "";
  document.getElementById("caption").innerHTML = "";
  document.getElementById("img01").src = "";
  document.getElementById("img01").style.display = "none";
}

//When the close button is clicked, the closeImg() function is called.
document.getElementById("closeButton").addEventListener("click", function () {
  closeImg();
});

// // When the fullscreen button is clicked, do full screen.
// document.getElementById('fullscreenButton').addEventListener('click', function () {
// });

document.getElementById("myModal2").addEventListener("click", function () {
  closeImg();
});

//Search and Load Scene
function searchScene(sceneKey) {
  for (let i = 0; i < sceneConfig.length; i++) {
    if (sceneConfig[i].scene === sceneKey) {
      return sceneConfig[i];
    }
  }
}

/**
 * The function takes a sceneKey as an argument, searches for the sceneKey in the scenes array, and
 * then loads the scene into the viewer.
 * @param sceneKey - The key of the scene you want to load.
 */
function loadScene(sceneKey) {
  let scene = searchScene(sceneKey);
  viewer.loadScene(scene.scene, scene.pitch, scene.yam, scene.hfov);
}

/**
 * It loads a scene from the map.
 * @param sceneKey - The scene key you want to load.
 * @param zoom - The zoom level of the map.
 */
function loadSceneFromMap(sceneKey, zoom) {
  loadScene(sceneKey);
  document.getElementById("myModal").style.display = "none";
  document.getElementById("map_button_wrapper").click();

  map.setZoom(zoom);
}

/**
 * If the current scene is the last scene in the sceneConfig array, load the first scene, otherwise
 * load the next scene
 */
function nextScene() {
  for (let scene in sceneConfig) {
    if (sceneConfig[scene].scene === viewer.getScene()) {
      if (viewer.getScene() === sceneConfig[sceneConfig.length - 1].scene) {
        loadScene(sceneConfig[0].scene);
        break;
      } else {
        loadScene(sceneConfig[parseInt(scene) + 1].scene);
        break;
      }
    }
  }
}

/**
 * If the current scene is the first scene, load the last scene, otherwise load the previous scene.
 */
function previousScene() {
  let last = "";
  for (let scene in sceneConfig) {
    if (sceneConfig[scene].scene === viewer.getScene()) {
      if (last !== "") {
        loadScene(last);
        break;
      } else {
        loadScene(sceneConfig[sceneConfig.length - 1].scene);
        break;
      }
    } else last = sceneConfig[scene].scene;
  }
}

//Package Control
function nextBuilding() {
  changeBuilding((currentBuildingCtrl += 1));
}

function previousBuilding() {
  changeBuilding((currentBuildingCtrl += -1));
}

function changeBuilding(n) {
  if (n > markersBuildings.length - 1) {
    currentBuildingCtrl = 0;
  }
  if (n < 0) {
    currentBuildingCtrl = markersBuildings.length - 1;
  }
  if (viewer.getScene() !== markersBuildings[currentBuildingCtrl].scene)
    viewer.loadScene(
      markersBuildings[currentBuildingCtrl].scene,
      markersBuildings[currentBuildingCtrl].pitch,
      markersBuildings[currentBuildingCtrl].yam,
      viewer.getHfov()
    );
  else
    viewer.lookAt(
      markersBuildings[currentBuildingCtrl].pitch,
      markersBuildings[currentBuildingCtrl].yam
    );

  if (infowindowCtrl != null) infowindowCtrl.close();

  for (let i = 0; i < map.markers.length; i++) {
    let selectedMarker = map.markers[i];
    if (
      markersBuildings[currentBuildingCtrl].lat ===
        selectedMarker.getPosition().lat() &&
      markersBuildings[currentBuildingCtrl].lng ===
        selectedMarker.getPosition().lng()
    )
      google.maps.event.trigger(map.markers[i], "click");
  }
}

//Bottom Menu Event Listener
let els = document.getElementsByClassName("ctrl");
Array.prototype.forEach.call(els, function (el) {
  //Load Scene
  document.getElementById(el.id).addEventListener("click", function () {
    loadScene(el.id);
  });

  //Mouse Over Event
  document.getElementById(el.id).addEventListener("mouseover", function () {
    //Highlights Current Hotspot
    if (document.getElementsByClassName(el.id).item(0) != null)
      document
        .getElementsByClassName(el.id)
        .item(0)
        .classList.add("hoverEffect");

    //Dims Other hotspots
    let hotspots_elements =
      document.getElementsByClassName("pnlm-hotspot-base");
    Array.prototype.forEach.call(hotspots_elements, function (el2) {
      if (el2.classList[2] !== el.id) {
        document
          .getElementsByClassName(el2.classList[2])
          .item(0)
          .classList.add("hoverReduceBrightness");
      }
    });
  });

  //Mouse Out Event
  document.getElementById(el.id).addEventListener("mouseout", function () {
    //Remove Highlight from Current Hotspot
    if (document.getElementsByClassName(el.id).item(0) != null)
      document
        .getElementsByClassName(el.id)
        .item(0)
        .classList.remove("hoverEffect");

    //Remove Dim from Other hotspots
    let hotspots_elements =
      document.getElementsByClassName("pnlm-hotspot-base");
    Array.prototype.forEach.call(hotspots_elements, function (el2) {
      if (el2.classList[2] !== el.id) {
        document
          .getElementsByClassName(el2.classList[2])
          .item(0)
          .classList.remove("hoverReduceBrightness");
      }
    });
  });
});

//Search Bar Control
document.getElementById("searchBar").addEventListener("change", function () {
  let e = document.getElementById("searchBar");
  let value = e.options[e.selectedIndex].value;
  /*let text = e.options[e.selectedIndex].text;*/

  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    if (hs_el.classList[2] === value) {
      hs_el.classList.add("hoverEffect");
      hs_el.classList.remove("hoverReduceBrightness");
    } else {
      hs_el.classList.add("hoverReduceBrightness");
      hs_el.classList.remove("hoverEffect");
    }
  });
});

//Create Default Option for the Select Element
function createDefaultOption(text) {
  let optionFilterDefault = document.createElement("option");
  optionFilterDefault.value = "";
  optionFilterDefault.text = text;
  optionFilterDefault.hidden = true;
  optionFilterDefault.selected = true;
  optionFilterDefault.disabled = true;

  return optionFilterDefault;
}

/* Adding an event listener to the viewer.on('load') event. */
viewer.on("load", function () {
  //Clear filter box
  let i,
    L = document.getElementById("searchBar").options.length - 1;
  for (i = L; i >= 0; i--) {
    document.getElementById("searchBar").remove(i);
  }

  document.getElementById("searchBar").add(createDefaultOption(" Filter"));

  //Hover Hotspots event listener
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    //Check Settings and Show/Hide Hot Spots
    if (document.getElementById("cbHotSpot").checked) {
      hs_el.classList.add("visible");
      hs_el.classList.remove("hidden");
    } else {
      hs_el.classList.add("hidden");
      hs_el.classList.remove("visible");
    }
    viewer.renderHotSpots();

    //Mouse Over Event
    hs_el.addEventListener("mouseover", function () {
      Array.prototype.forEach.call(els, function (el2) {
        if (hs_el.classList[2] === el2.id) el2.classList.add("hoverEffect");
        else el2.classList.add("hoverReduceBrightness");
      });
    });

    //Mouse Out Event
    hs_el.addEventListener("mouseout", function () {
      Array.prototype.forEach.call(els, function (el2) {
        if (hs_el.classList[2] === el2.id) el2.classList.remove("hoverEffect");
        else el2.classList.remove("hoverReduceBrightness");
      });
    });

    if (hs_el.getElementsByTagName("span")[0] !== undefined) {
      let option = document.createElement("option");
      option.value = hs_el.classList[2];
      option.text =
        hs_el.getElementsByTagName("span")[0] === undefined
          ? ""
          : hs_el.getElementsByTagName("span")[0].innerHTML;
      document.getElementById("searchBar").add(option);
    }
  });

  //Scene history
  if (addToHistory) {
    while (currentScene < sceneHistory.length - 1) {
      sceneHistory.pop();
    }
    sceneHistory.push(viewer.getScene());
    currentScene = sceneHistory.length - 1;
  }

  //Scene previous control
  if (currentScene > 0) {
    document.getElementById("previousPage").classList.remove("hidden");
    document.getElementById("previousPage").onclick = function () {
      addToHistory = false;
      currentScene = currentScene - 1;
      loadScene(sceneHistory[currentScene]);
    };
  } else {
    document.getElementById("previousPage").classList.add("hidden");
  }

  //Scene next control
  if (currentScene < sceneHistory.length - 1) {
    document.getElementById("nextPage").classList.remove("hidden");
    document.getElementById("nextPage").onclick = function () {
      addToHistory = false;
      currentScene = currentScene + 1;
      loadScene(sceneHistory[currentScene]);
    };
  } else {
    document.getElementById("nextPage").classList.add("hidden");
  }
  addToHistory = true;

  //Remove Hover Effect from Views Menu
  let els = document.getElementsByClassName("ctrl");
  Array.prototype.forEach.call(els, function (el) {
    el.classList.remove("hoverEffect");
    el.classList.remove("hoverReduceBrightness");
  });

  /*saveAnalytics();*/

  mapPanToCurrentScene();
  updateRadar();
});

let clientConfig;
$.getJSON("https://api.db-ip.com/v2/free/self", function (data) {
  clientConfig = data;
});
let last_scene = "";

function saveAnalytics() {
  // Instantiate an new XHR Object
  const xhr = new XMLHttpRequest();

  // Open an obejct (GET/POST, PATH,
  // ASYN-TRUE/FALSE)
  xhr.open("POST", "https://34.95.37.194/render/api/", true);

  // When response is ready
  xhr.onload = function () {
    console.log(this.status);
    console.log(this.responseText);
  };

  let body =
    '{"tour_id":17, ' +
    '"ip_client":"' +
    clientConfig["ipAddress"] +
    '", ' +
    '"location":"' +
    clientConfig["continentCode"] +
    ";" +
    clientConfig["countryCode"] +
    ";" +
    clientConfig["stateProvCode"] +
    ";" +
    clientConfig["city"] +
    '", ' +
    '"scene":"' +
    viewer.getScene() +
    '", ' +
    '"last_scene":"' +
    last_scene +
    '", ' +
    '"email_sent":0, ' +
    '"reservation":0}';
  xhr.send(body);

  last_scene = viewer.getScene();
}

//Side Bar - Audio Player
function showAudioPlayer() {
  document.getElementById("audio_elm").style.visibility =
    document.getElementById("audio_elm").style.visibility === "visible"
      ? "hidden"
      : "visible";
  //document.getElementById("myModal").style.display = (document.getElementById("myModal").style.display === "none" ? "flex" : "none");
}

function showMap() {
  document.getElementById("myModal").style.display = "flex";
}

var sidebarToggle = false;

//Side bar - Info - show control
function openSideBarSettings() {
  document.getElementById("sideBarSettings").style.display = "block";
  document.getElementById("sideBarSearch").style.display = "none";

  if (!sidebarToggle) {
    document.getElementById("mySidebar").style.right = "1%";
    document.getElementById("settingsButton").innerHTML =
      '<span class="tooltiptext">Close Settings</span><i class="material-icons">close</i>';
    document.getElementById("searchButton").innerHTML =
      '<span class="tooltiptext">Filter</span><i class="material-icons">search</i>';
    sidebarToggle = true;
  } else {
    document.getElementById("mySidebar").style.right = "-75vw";
    document.getElementById("settingsButton").innerHTML =
      '<span class="tooltiptext">Menu</span><i class="material-icons">menu</i>';
    sidebarToggle = false;
  }
}

//Show Hot Spots CheckBox Function
document.getElementById("cbHotSpot").addEventListener("change", function () {
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    if (document.getElementById("cbHotSpot").checked) {
      hs_el.classList.add("visible");
      hs_el.classList.remove("hidden");
    } else {
      hs_el.classList.add("hidden");
      hs_el.classList.remove("visible");
    }
    viewer.renderHotSpots();
  });
});

//Side bar - Search - Clear Filter
function clearFilter() {
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    hs_el.classList.remove("hoverEffect");
    hs_el.classList.remove("hoverReduceBrightness");
  });

  document.getElementById("searchBar").add(createDefaultOption(" Filter"));

  document.getElementById("filterPOI").value = "";
  filterMarkers();
}

//Map Functions
function initMap() {} // now it IS a function and it is in global

$(() => {
  initMap = function () {
    // map options
    let options = {
      center: { lat: 43.89727324808866, lng: -78.8638755018928 },
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.satellite,
      labels: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
    };
    map = new google.maps.Map(document.getElementById("map"), options);

    map.markers = [];

    map.addListener("bounds_changed", () => {
      // 0.3 seconds after the center of the map has changed, update Radar Marker
      window.setTimeout(() => {
        updateRadar();
      }, 300);
    });

    map.addListener("zoom_changed", () => {
      window.setTimeout(() => {
        updateRadar();
      }, 300);
    });

    // Loop through markers
    markersScenes.forEach(addMarkersScenes);
    markersPOI.forEach(addMarkersPOI);
    markersBuildings.forEach(addMarkersBuildings);
    if (markersBuildings.length !== 0) {
      let optionMarkerFilter = document.createElement("option");
      optionMarkerFilter.value = "Economic Opportunities";
      optionMarkerFilter.text = "Economic Opportunities";
      document.getElementById("filterPOI").add(optionMarkerFilter);
    }

    const ClusterIcon = window.btoa(`
          <svg fill="#ea1d2e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <circle cx="120" cy="120" opacity="1" r="70" />
            <circle cx="120" cy="120" opacity=".7" r="95" />
            <circle cx="120" cy="120" opacity=".4" r="120" />
          </svg>`);

    //Add Marker and Cluster Markers
    let markerCluster = new MarkerClusterer(map, markerCurrent, {
      minimumClusterSize: 100,
      styles: [
        {
          url: `data:image/svg+xml;base64,${ClusterIcon}`,
          height: 60,
          width: 60,
          textColor: "#ea1d2e",
        },
      ],
    });
  };
});

/**
 * It adds a marker to the map, and if the marker has a scene associated with it, it adds a click
 * listener to the marker that loads the scene.
 * @param marker - {
 */
function addMarkersScenes(marker) {
  let markerIcon = {
    url: "svg/Oshawa-logo-pin.svg",
    scaledSize: new window["google"].maps.Size(50, 50),
  };

  let markerLatLng = new google.maps.LatLng(marker.lat, marker.lng);
  let newMarker = new google.maps.Marker({
    position: markerLatLng,
    icon: markerIcon,
    scale: 1,
    zIndex: marker.zIndex,
    title: marker.title,
    map: map,
  });

  if (marker.scene !== "") {
    newMarker.addListener("click", () => {
      loadScene(marker.scene);
    });

    if (marker.scene === viewer.getScene()) {
      radarMarker = new google.maps.Marker({
        position: markerLatLng,
        icon: radar_icon,
        scale: 2,
        zIndex: 99,
      });

      //markerCurrent.push(radarMarker);
    }
  }

  //markerCurrent.push(newMarker);
}

// Check to see if a map marker is contained within a certain scene.
function checkIfInScene(marker, scene) {
  let allScenes = viewer.getConfig().scenes;
  let SceneHotspots = allScenes[scene]["hotSpots"];
  for (let i = 0; i < SceneHotspots.length; i++) {
    if (marker.title === SceneHotspots[i].text) {
      return SceneHotspots[i]; // RETURNS THE HOTSPOT OBJECT IN SCENE
    }
  }
}

// Function to check if there is a website.
function openWebsite(website) {
  if (website !== "") {
    window.open(website, "_blank");
  }
}

function addMarkersPOI(marker) {
  let addFilter = true;
  let markerLatlng = new google.maps.LatLng(marker.lat, marker.lng);

  let markerIcon = {
    url: marker.icon,
    scaledSize: new window["google"].maps.Size(50, 50),
  };

  let newMarker = new google.maps.Marker({
    position: markerLatlng,
    icon: markerIcon,
    scale: 2,
    zIndex: 10,
    title: marker.title,
    category: marker.category,
  });

  let optionMarkerFilter = document.createElement("option");
  optionMarkerFilter.value = marker.category;
  optionMarkerFilter.text = marker.category;

  for (let i = 0; i < document.getElementById("filterPOI").length; ++i) {
    if (
      document.getElementById("filterPOI").options[i].value === marker.category
    ) {
      addFilter = false;
      break;
    }
  }

  if (addFilter) document.getElementById("filterPOI").add(optionMarkerFilter);

  let infowindow = null;

  if (marker.additional_info !== "") {
    infowindow = new google.maps.InfoWindow({
      content: marker.additional_info,
    });
  }

  newMarker.addListener("click", () => {
    // Get hotspot object in scene for this marker
    let markerInScene = checkIfInScene(marker, viewer.getScene());

    // If marker is visible in current scene, look at marker
    if (markerInScene) {
      viewer.lookAt(markerInScene.pitch, markerInScene.yaw);
    }

    if (marker.additional_info !== "") {
      if (infowindowCtrl != null) infowindowCtrl.close();

      infowindow.open({
        anchor: newMarker,
        map,
        shouldFocus: true,
      });

      infowindowCtrl = infowindow;

      /*currentBuildingCtrl = marker.order;*/

      // wait 100ms before adding pictures to the info window to ensure that the info window is fully loaded
      setTimeout(() => {
        closeImg();
        slideIndex = 1;
        openCarousel(marker.images);
      }, 100);
    }
  });

  markerCurrent.push(newMarker);
  map.markers.push(newMarker);
}

function addMarkersBuildings(marker) {
  let markerLatlng = new google.maps.LatLng(marker.lat, marker.lng);
  let newMarker = new google.maps.Marker({
    position: markerLatlng,
    icon: svgMarkerEconomicOpportunities,
    scale: 2,
    zIndex: 10,
    title: marker.title,
    category: "Economic Opportunities",
    map: map,
  });

  const infowindow = new google.maps.InfoWindow({
    content: marker.additional_info,
  });

  newMarker.addListener("click", () => {
    if (infowindowCtrl != null) infowindowCtrl.close();

    infowindow.open({
      anchor: newMarker,
      map,
      shouldFocus: true,
    });

    infowindowCtrl = infowindow;

    currentBuildingCtrl = marker.order;

    // console.log('turning camera')
    // viewer.lookAt(marker.pitch, marker.yam);
  });

  //markerCurrent.push(newMarker);
  map.markers.push(newMarker);
}

/**
 * If the category is not picked, show all markers. If the category is picked, show only the markers
 * that match the category
 */
function filterMarkers() {
  let filterCategory = document.getElementById("filterPOI").value;
  for (let i = 0; i < map.markers.length; i++) {
    // If is same category or category not picked
    if (filterCategory === "") {
      map.markers[i].setVisible(true);
    } else if (
      map.markers[i].category !== undefined &&
      map.markers[i].category === filterCategory
    ) {
      map.markers[i].setVisible(true);
    } else {
      // Categories don't match
      map.markers[i].setVisible(false);
    }
  }
}

/**
 * When the user clicks on a marker, the map pans to the marker's location and the radar marker is
 * updated to the marker's location.
 */
function mapPanToCurrentScene() {
  markersScenes.forEach(function (marker) {
    if (marker.scene === viewer.getScene()) {
      let markerLatlng = new google.maps.LatLng(marker.lat, marker.lng);

      //Update Radar Marker Location
      radarMarker.setMap(null);
      radarMarker.setPosition(markerLatlng);
      radarMarker.setMap(map);
      updateRadar();

      map.panTo(markerLatlng);
    }
  });
}

/**
 * It rotates the radar to match the direction the pov is facing
 */
function updateRadar() {
  let radar = document.querySelectorAll('div[style*="z-index: 99"]');
  if (radar[1] !== undefined)
    document.querySelectorAll('div[style*="z-index: 99"]')[0].style.transform =
      "rotate(" + (viewer.getYaw() + viewer.getNorthOffset()) + "deg)";
}

viewer.on("animatefinished", function () {
  updateRadar();
});

//Share Functions
function showEmailLink() {
  document.getElementById("emailDiv").style.display = "flex";
}

/**
 * It creates an anchor tag with the href attribute set to the mailto protocol, the email address, and
 * the subject and body of the email. Then it clicks the anchor tag to open the email client.
 */
function sendEmail() {
  let email = document.getElementById("emailShareInput").value;
  let mailTo = document.createElement("a");
  mailTo.href =
    "mailto:" +
    email +
    "?subject=Downtown%20Oshawa%20Tour&body=Downtown%20Oshawa%20Tour:%20http://renderdevelopments.com/downtown-oshawa-tour/";
  mailTo.target = "_blank";
  mailTo.click();
  document.getElementById("emailDiv").style.display = "none";
}

/**
 * Gets the text from the element with the id of 'shareLink' and copies it to the clipboard.
 */
function copyToClipBoard() {
  let link = document.getElementById("shareLink");
  let copyButton = document.getElementById("copyButton");
  navigator.clipboard.writeText(link.innerHTML);
  copyButton.title = "Copied: " + link.innerHTML;
}

/**
 * Sets the title attribute of the copy button to 'Copy to clipboard'.
 */
function outCopyButton() {
  let copyButton = document.getElementById("copyButton");
  copyButton.title = "Copy to clipboard";
}

/**
 * It takes a language code as a parameter, and then shows the elements with that language code as an
 * attribute, and hides the elements with other language codes as attributes.
 * @param lang - The language you want to show.
 */
function selectLanguage(lang) {
  switch (lang) {
    case "EN":
      $('[lang="EN"]').show();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').hide();
      break;
    case "FR":
      $('[lang="EN"]').hide();
      $('[lang="FR"]').show();
      $('[lang="ES"]').hide();
      break;
    case "ES":
      $('[lang="EN"]').hide();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').show();
      break;
    default:
      $('[lang="EN"]').show();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').hide();
  }
}
