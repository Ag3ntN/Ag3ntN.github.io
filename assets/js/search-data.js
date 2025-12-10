
const currentUrl = window.location.href;
const siteUrl = "https://Ag3ntN.github.io"; 
let updatedUrl = currentUrl.replace("https://Ag3ntN.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume-cv",
          title: "resume/CV",
          description: "Here is my resume/CV!",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-dexco-teleoperation-system",
          title: 'DexCo Teleoperation System',
          description: "Haptic Teleoperation &amp; Control Loop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/1_msc/";
            },},{id: "projects-2025-competition-robot",
          title: '2025 Competition Robot',
          description: "Swerve Drivetrain &amp; Arm Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/2024robot/";
            },},{id: "projects-anti-roll-bar-system-design",
          title: 'Anti-Roll Bar System Design',
          description: "CAD, FEA, and Hand Calculations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/arb/";
            },},{id: "projects-mit-bwsi-uav-sar-system",
          title: 'MIT BWSI UAV-SAR System',
          description: "Synthetic Aperture Radar &amp; Kalman Filtering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/bwsi/";
            },},{id: "projects-telescoping-package-handler",
          title: 'Telescoping package handler',
          description: "Telescoping Elevator &amp; Grabbing System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/renatus/";
            },},{id: "projects-rocker-plate-optimization",
          title: 'Rocker Plate Optimization',
          description: "Structural &amp; Buckling Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/rocker_fea/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%6E%6F@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunosuke-nakamura-413376227", "_blank");
        },
      },{
          id: 'lang-ja',
          title: 'ja',
          section: 'Languages',
          handler: () => {
            window.location.href = "/ja" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
