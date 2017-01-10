;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-message" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640 416l-256 0c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S657.696 416 640 416z"  ></path>' +
    '' +
    '<path d="M579.264 544 384 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l195.264 0c17.696 0 32 14.336 32 32S596.928 544 579.264 544z"  ></path>' +
    '' +
    '<path d="M962.24 448c0-211.744-200.96-384-448-384s-448 172.256-448 384c0 116.512 63.04 226.048 172.928 300.672 14.624 9.984 34.528 6.144 44.448-8.512 9.92-14.624 6.112-34.528-8.512-44.448C183.04 633.216 130.24 542.944 130.24 448c0-176.448 172.256-320 384-320 211.744 0 384 143.552 384 320 0 176.448-172.256 320-384 320-1.984 0-3.68 0.768-5.568 1.12-15.136-2.72-30.464 5.216-35.776 20.192-6.144 17.376-46.368 46.656-94.144 73.792 17.44-58.208 9.088-70.688 3.488-78.976-6.72-9.984-17.92-15.936-29.92-15.936-17.664 0-32 14.304-32 32 0 5.824 1.536 11.264 4.256 15.968-3.232 18.208-17.216 60.832-33.056 99.84-4.928 12.096-1.984 25.984 7.392 35.072 6.08 5.888 14.112 8.992 22.272 8.992 4.384 0 8.8-0.896 12.992-2.752 36.48-16.256 147.648-69.12 187.616-125.632C765.344 828.16 962.24 657.568 962.24 448z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-friend" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M401.248 960.288c-226.592 0-336.704-53.056-336.704-162.24 0-76.8 114.4-127.072 230.048-144.64l0-6.496c-86.336-66.112-97.856-184.032-97.856-281.024 0-132.192 77.792-211.104 208.128-211.104l6.816 0c130.336 0 208.16 78.912 208.16 211.104 0 96.992-11.52 214.912-97.888 281.024l0 6.496c115.616 17.568 230.016 67.808 230.016 144.64C752 872.064 691.168 960.288 401.248 960.288zM404.864 218.784c-95.648 0-144.128 49.472-144.128 147.104 0 91.264 9.856 190.848 83.04 237.408 9.216 5.888 14.816 16.064 14.816 27.008l0 51.264c0 16.384-12.352 30.08-28.64 31.808-121.088 12.768-201.408 59.424-201.408 84.672 0 65.184 91.744 98.24 272.704 98.24 182.208 0 286.752-35.808 286.752-98.24 0-25.248-80.32-71.904-201.376-84.672-16.288-1.728-28.64-15.424-28.64-31.808l0-51.264c0-10.944 5.6-21.12 14.816-27.008 73.184-46.592 83.072-146.144 83.072-237.408 0-97.6-48.512-147.104-144.16-147.104L404.864 218.784z"  ></path>' +
    '' +
    '<path d="M899.232 763.84c-17.696 0-32-14.304-32-32 0-24.48-91.2-83.904-196.96-95.104-16.32-1.728-28.672-15.424-28.672-31.808l0-66.56c0-10.944 5.6-21.12 14.816-27.008 82.784-52.672 91.712-169.792 91.712-217.696C748.128 183.2 673.44 160 610.784 160c-17.696 0-32-14.336-32-32s14.304-32 32-32c124.192 0 201.344 75.744 201.344 197.696 0 55.712-10.752 188.672-106.528 261.376l0 22.208c102.24 18.656 225.632 79.968 225.632 154.56C931.232 749.536 916.896 763.84 899.232 763.84z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-voice" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.936 705.728c-105.888 0-192-86.112-192-192L319.936 257.952c0-105.888 86.112-192 192-192s192 86.112 192 192l0 255.776C703.936 619.584 617.824 705.728 511.936 705.728zM511.936 129.952c-70.592 0-128 57.408-128 128l0 255.776c0 70.592 57.408 128 128 128 70.592 0 128-57.408 128-128L639.936 257.952C639.936 187.36 582.528 129.952 511.936 129.952z"  ></path>' +
    '' +
    '<path d="M864 479.776 864 352c0-17.664-14.304-32-32-32s-32 14.336-32 32l0 127.776c0 160.16-129.184 290.464-288 290.464-158.784 0-288-130.304-288-290.464L224 352c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 127.776c0 184.608 140.864 336.48 320 352.832L480 896 288 896c-17.664 0-32 14.304-32 32s14.336 32 32 32l448 0c17.696 0 32-14.304 32-32s-14.304-32-32-32l-192 0 0-63.36C723.136 816.256 864 664.384 864 479.776z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-people" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960c-276.032 0-416-62.048-416-184.48 0-87.392 144.256-144.64 288-164l0-18.176c-86.304-60.352-128.352-165.6-128.352-320.992C255.648 121.856 349.888 32 507.744 32l8.512 0c157.888 0 252.128 89.856 252.128 240.352 0 58.432 0 231.808-127.328 321.216l-0.416 18.048c143.52 19.456 287.36 76.64 287.36 163.904C928 897.952 788.032 960 512 960zM507.744 96c-85.824 0-188.096 30.592-188.096 176.352 0 140.096 36.928 230.464 112.864 276.256C442.112 554.368 448 564.768 448 576l0 64c0 16.448-12.448 30.208-28.832 31.84C263.36 687.392 160 744.576 160 775.52 160 875.104 351.424 896 512 896c160.608 0 352-20.896 352-120.48 0-30.976-103.36-88.128-259.2-103.68-16.64-1.664-29.152-15.84-28.8-32.544l1.408-64c0.256-10.976 6.08-21.056 15.456-26.72 76.064-45.856 111.488-133.632 111.488-276.256C704.384 126.592 602.048 96 516.256 96L507.744 96z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-emojilight" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.933333 960c-247.04 0-448-200.981333-448-448 0-247.04 200.96-448 448-448 247.018667 0 448 200.96 448 448C958.933333 759.018667 757.952 960 510.933333 960zM510.933333 106.666667c-223.509333 0-405.333333 181.824-405.333333 405.333333s181.824 405.333333 405.333333 405.333333 405.333333-181.824 405.333333-405.333333S734.442667 106.666667 510.933333 106.666667z"  ></path>' +
    '' +
    '<path d="M511.978667 765.376c-90.197333 0-173.824-40.768-229.44-111.850667-7.253333-9.28-5.632-22.677333 3.648-29.952 9.28-7.232 22.698667-5.632 29.952 3.669333 47.466667 60.693333 118.848 95.488 195.84 95.488 77.802667 0 149.653333-35.392 197.12-97.130667 7.168-9.344 20.565333-11.114667 29.909333-3.925333s11.093333 20.586667 3.925333 29.909333C687.296 723.904 603.114667 765.376 511.978667 765.376z"  ></path>' +
    '' +
    '<path d="M374.4 499.178667c-17.685333 0-32-14.314667-32-32l0-64c0-17.685333 14.314667-32 32-32s32 14.314667 32 32l0 64C406.4 484.864 392.085333 499.178667 374.4 499.178667z"  ></path>' +
    '' +
    '<path d="M651.733333 499.178667c-17.664 0-32-14.314667-32-32l0-64c0-17.685333 14.336-32 32-32s32 14.314667 32 32l0 64C683.733333 484.864 669.397333 499.178667 651.733333 499.178667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-roundaddlight" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960.021333c-119.68 0-232.192-46.613333-316.8-131.221333C110.592 744.192 64 631.68 64 512c0-119.68 46.592-232.192 131.2-316.8C279.808 110.592 392.32 64 512 64c119.68 0 232.192 46.592 316.8 131.2 84.629333 84.608 131.221333 197.098667 131.221333 316.778667s-46.613333 232.170667-131.221333 316.8C744.192 913.408 631.68 960.021333 512 960.021333zM512 106.666667c-108.288 0-210.069333 42.154667-286.634667 118.698667S106.666667 403.712 106.666667 512c0 108.288 42.154667 210.090667 118.698667 286.634667 76.544 76.565333 178.346667 118.72 286.634667 118.72 108.288 0 210.090667-42.176 286.634667-118.72 76.565333-76.565333 118.72-178.346667 118.72-286.634667 0-108.266667-42.176-210.069333-118.72-286.613333C722.090667 148.821333 620.288 106.666667 512 106.666667z"  ></path>' +
    '' +
    '<path d="M725.312 490.666667l-191.637333 0L533.333333 298.645333C533.312 286.869333 523.776 277.333333 512 277.333333c0 0-0.021333 0-0.021333 0-11.797333 0.021333-21.333333 9.578667-21.312 21.354667L490.986667 490.666667l-190.549333 0c-11.776 0-21.333333 9.557333-21.333333 21.333333s9.557333 21.333333 21.333333 21.333333l190.613333 0 0.32 192.170667c0.021333 11.776 9.557333 21.290667 21.333333 21.290667 0 0 0.021333 0 0.021333 0 11.797333-0.021333 21.312-9.578667 21.312-21.376L533.738667 533.333333l191.573333 0c11.797333 0 21.333333-9.557333 21.333333-21.333333S737.109333 490.666667 725.312 490.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-profilelight" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M385.237333 938.730667c-0.618667 0-1.237333-0.021333-1.877333-0.085333-126.570667-11.029333-277.44-43.498667-277.44-135.552 0-76.565333 126.186667-131.882667 256.746667-149.610667l0-27.349333c-95.850667-69.824-108.437333-200.64-108.437333-307.925333 0-170.133333 113.813333-230.741333 220.330667-230.741333 133.248 0 209.685333 84.096 209.685333 230.741333 0 63.125333-8 153.429333-46.101333 225.024-5.525333 10.389333-18.474667 14.4-28.864 8.810667-10.389333-5.546667-14.357333-18.453333-8.810667-28.864 35.776-67.178667 41.109333-157.269333 41.109333-204.970667 0-121.301333-59.306667-188.074667-167.018667-188.074667-53.418667 0-177.664 18.325333-177.664 188.074667 0 100.010667 11.221333 222.101333 98.709333 278.805333 6.058667 3.946667 9.728 10.666667 9.728 17.898667l0 57.450667c0 10.901333-8.213333 20.032-19.050667 21.205333-126.634667 13.610667-237.696 64.768-237.696 109.504 0 44.565333 91.370667 80.213333 238.485333 93.034667 11.733333 1.024 20.416 11.370667 19.392 23.104C405.482667 930.346667 396.181333 938.730667 385.237333 938.730667z"  ></path>' +
    '' +
    '<path d="M768 746.730667l-128 0c-11.797333 0-21.333333-9.536-21.333333-21.333333s9.536-21.333333 21.333333-21.333333l128 0c11.797333 0 21.333333 9.536 21.333333 21.333333S779.797333 746.730667 768 746.730667z"  ></path>' +
    '' +
    '<path d="M704 832.106667l-64 0c-11.797333 0-21.333333-9.536-21.333333-21.333333s9.536-21.333333 21.333333-21.333333l64 0c11.797333 0 21.333333 9.536 21.333333 21.333333S715.797333 832.106667 704 832.106667z"  ></path>' +
    '' +
    '<path d="M832 938.730667 576 938.730667c-47.061333 0-85.333333-38.272-85.333333-85.333333l0-170.624c0-47.061333 38.272-85.333333 85.333333-85.333333l256 0c47.061333 0 85.333333 38.272 85.333333 85.333333l0 170.624C917.333333 900.458667 879.061333 938.730667 832 938.730667zM576 640.106667c-23.530667 0-42.666667 19.136-42.666667 42.666667l0 170.624c0 23.530667 19.136 42.666667 42.666667 42.666667l256 0c23.530667 0 42.666667-19.136 42.666667-42.666667l0-170.624c0-23.530667-19.136-42.666667-42.666667-42.666667L576 640.106667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-peoplelist" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M384.832 959.904c-0.928 0-1.856-0.032-2.816-0.128-162.752-14.176-285.472-90.72-285.472-178.016 0-87.904 162.112-141.024 286.816-158.976l0-12.416c-116-85.76-128.928-246.432-128.928-313.504 0-145.888 85.856-232.96 229.664-232.96 142.08 0 220.352 82.72 220.352 232.96 0 69.76-23.84 157.888-62.208 230.016-8.288 15.584-27.648 21.536-43.296 13.216-15.584-8.288-21.536-27.68-13.216-43.296 33.248-62.496 54.72-140.96 54.72-199.968 0-113.696-51.136-168.96-156.352-168.96-109.92 0-165.664 56.832-165.664 168.96 0 59.264 11.136 204.128 114.112 269.696 9.216 5.888 14.816 16.064 14.816 27.008l0 57.472c0 16.384-12.352 30.08-28.64 31.808-147.328 15.552-258.176 70.72-258.176 98.912 0 39.456 86.368 102.016 227.04 114.272 17.6 1.536 30.624 17.056 29.088 34.656C415.232 947.328 401.28 959.904 384.832 959.904z"  ></path>' +
    '' +
    '<path d="M896 640l-160 0c-17.696 0-32-14.304-32-32s14.304-32 32-32l160 0c17.696 0 32 14.304 32 32S913.696 640 896 640z"  ></path>' +
    '' +
    '<path d="M896 800l-288 0c-17.696 0-32-14.304-32-32s14.304-32 32-32l288 0c17.696 0 32 14.304 32 32S913.696 800 896 800z"  ></path>' +
    '' +
    '<path d="M896 960l-288 0c-17.696 0-32-14.304-32-32s14.304-32 32-32l288 0c17.696 0 32 14.304 32 32S913.696 960 896 960z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)