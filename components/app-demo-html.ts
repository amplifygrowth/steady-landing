// Full self-contained demo HTML — compiled into the bundle, not served as a file.
// Source: steady/demo-output/steady-demo.html
const DEMO_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Steady — App Demo</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #1A1520;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', system-ui, sans-serif;
    padding: 32px 16px;
    gap: 24px;
  }

  .phone-wrap { position: relative; width: 390px; flex-shrink: 0; }

  .phone-frame {
    width: 390px;
    height: 780px;
    border-radius: 44px;
    background: #F8F6F1;
    border: 8px solid #2D2230;
    box-shadow:
      0 0 0 1px #1A1520,
      0 40px 80px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.08);
    overflow: hidden;
    position: relative;
  }

  .phone-frame::before {
    content: '';
    position: absolute;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 120px; height: 30px;
    background: #2D2230;
    border-radius: 0 0 20px 20px;
    z-index: 100;
  }

  .app-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, #DDD3E8 0%, #F8F6F1 60%, #F8F6F1 100%);
    overflow: hidden;
  }

  .status-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 44px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 28px 6px;
    z-index: 50;
    font-size: 12px;
    font-weight: 600;
    color: #2B2F2A;
  }

  .tab-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 72px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-top: 1px solid #E8E9E3;
    display: flex;
    align-items: flex-start;
    padding-top: 14px;
    z-index: 50;
  }

  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
  }

  .tab-label { font-size: 14px; font-weight: 500; color: #9A9E96; }
  .tab-label.active { color: #5C4A5E; font-weight: 600; }

  .screen-container {
    position: absolute;
    top: 44px; left: 0; right: 0; bottom: 72px;
    overflow: hidden;
  }

  .screen {
    position: absolute;
    inset: 0;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;
    transition: opacity 0.8s ease;
    padding-bottom: 16px;
    scrollbar-width: none;
  }
  .screen::-webkit-scrollbar { display: none; }
  .screen.active { opacity: 1; }

  .card {
    border-radius: 16px;
    padding: 16px;
    margin: 0 16px 12px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(92,74,94,0.08);
  }

  .scale-row { margin-bottom: 20px; }
  .scale-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
  .scale-label { font-size: 14px; font-weight: 600; color: #2B2F2A; }
  .scale-hint { font-size: 12px; color: #8A8F86; }
  .scale-buttons { display: flex; gap: 8px; }
  .scale-btn {
    flex: 1; height: 48px; border-radius: 12px;
    font-size: 16px; font-weight: 600;
    background: #FFFFFF; color: #5C5F5A;
    border: 1.5px solid #E3E4DE; cursor: default; font-family: inherit;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    display: flex; align-items: center; justify-content: center;
  }
  .scale-btn.selected { background: #5C4A5E; color: #FFF; border-color: #5C4A5E; }

  .chip {
    padding: 8px 12px; border-radius: 9999px; font-size: 14px;
    background: #FFFFFF; color: #4A4E47;
    border: 1.5px solid #E3E4DE; cursor: default; font-family: inherit;
    transition: background 0.2s, color 0.2s, border-color 0.2s; white-space: nowrap;
  }
  .chip.active { background: #F3F0F4; color: #5C4A5E; border-color: #5C4A5E; }

  .btn-primary {
    width: 100%; padding: 14px; border-radius: 12px;
    font-weight: 600; font-size: 16px;
    background: #5C4A5E; color: #FFF; border: none;
    cursor: default; font-family: inherit;
    transition: opacity 0.15s, transform 0.1s;
  }
  .btn-primary.disabled { opacity: 0.35; }
  .btn-primary.pressing { transform: scale(0.98); opacity: 0.85; }

  .task-row {
    display: flex; align-items: center;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(229,224,232,0.8);
    box-shadow: 0 2px 12px rgba(92,74,94,0.06);
    border-radius: 12px; margin-bottom: 8px;
    padding: 15px 16px; gap: 12px;
  }

  .task-circle {
    width: 24px; height: 24px; border-radius: 50%;
    border: 2px solid #C9CBC4; background: transparent;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; color: #FFF; flex-shrink: 0;
    transition: background 0.3s, border-color 0.3s;
  }
  .task-circle.done { background: #5C4A5E; border-color: #5C4A5E; }

  .task-title { font-size: 18px; color: #2B2F2A; transition: color 0.3s; line-height: 1.4; }
  .task-title.done { color: #9A9E96; text-decoration: line-through; }
  .task-sub { font-size: 13px; color: #C9CBC4; margin-top: 3px; }

  .cap-card {
    margin: 8px 16px 20px; border-radius: 16px; padding: 20px;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(92,74,94,0.08);
  }
  .cap-label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .cap-word { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
  .cap-line { font-family: 'Fraunces', Georgia, serif; font-size: 22px; line-height: 1.4; color: #2B2F2A; }

  .heatmap-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; margin-bottom: 4px; }
  .heatmap-day-label { text-align: center; font-size: 10px; color: #9A9E96; font-weight: 600; letter-spacing: 0.04em; padding: 2px 0 4px; }
  .heatmap-cell { aspect-ratio: 1; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.85); }
  .heatmap-cell.empty { background: #EDEEE8; color: #C0C2BB; }

  .insight-card {
    border-radius: 16px; padding: 16px; margin: 0 16px 12px;
    opacity: 0; transform: translateY(8px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .insight-card.visible { opacity: 1; transform: translateY(0); }
  .insight-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
  .insight-item {
    display: flex; align-items: flex-start; gap: 10px;
    padding-top: 8px; margin-top: 8px; border-top: 1px solid rgba(92,74,94,0.12);
  }
  .insight-item:first-of-type { padding-top: 0; margin-top: 0; border-top: none; }
  .insight-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
  .insight-text { font-size: 15px; color: #2B2F2A; line-height: 1.5; }

  .progress-bar-wrap { width: 390px; display: flex; gap: 6px; }
  .progress-segment { flex: 1; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.2); overflow: hidden; }
  .progress-fill { height: 100%; background: #DDD3E8; width: 0%; border-radius: 2px; transition: width linear; }

  .controls { display: flex; gap: 12px; align-items: center; }
  .nav-btn {
    padding: 10px 24px; border-radius: 9999px; font-size: 14px; font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.2); cursor: pointer; transition: background 0.2s;
  }
  .nav-btn:hover { background: rgba(255,255,255,0.2); }
  .screen-indicator { font-size: 13px; color: rgba(255,255,255,0.5); font-family: 'DM Sans', sans-serif; min-width: 140px; text-align: center; }

  .cap-result {
    margin-top: 16px; padding: 14px 16px; border-radius: 14px;
    display: flex; align-items: center; gap: 10px;
    opacity: 0; transform: translateY(6px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .cap-result.visible { opacity: 1; transform: translateY(0); }

  .checkin-inner { padding: 28px 20px 24px; }
  .checkin-title { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #2B2F2A; margin-bottom: 4px; }
  .checkin-sub { font-size: 14px; color: #7A7E76; margin-bottom: 24px; line-height: 1.5; }
  .factors-label { font-size: 14px; font-weight: 600; color: #2B2F2A; margin-bottom: 8px; }
  .factors-hint { font-size: 13px; color: #8A8F86; margin-bottom: 8px; line-height: 1.5; }
  .factors-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .note-input {
    width: 100%; padding: 12px 16px; border-radius: 12px; font-size: 16px;
    background: #FFF; border: 1.5px solid #E3E4DE; color: #9A9E96;
    outline: none; font-family: inherit; margin-bottom: 20px;
  }

  .basics-pill {
    padding: 8px 12px; border-radius: 9999px; font-size: 16px;
    background: #FFF; color: #4A4E47; border: 1.5px solid #E3E4DE;
    display: inline-block; margin: 0 4px 4px 0;
    transition: background 0.3s, color 0.3s, border-color 0.3s;
  }
  .basics-pill.done { background: #5C4A5E; color: #FFF; border-color: #5C4A5E; }

  .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
  .section-title { font-size: 20px; font-weight: 700; color: #5C4A5E; }
  .section-sub { font-size: 13px; color: #8A8F86; }

  .anchor-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid #F0F1EC; }
  .anchor-time { font-size: 13px; font-weight: 600; flex-shrink: 0; color: #5C4A5E; min-width: 40px; }
  .anchor-title-t { flex: 1; font-size: 16px; color: #2B2F2A; }
  .anchor-check {
    width: 20px; height: 20px; border-radius: 50%;
    border: 2px solid #5C4A5E; background: #5C4A5E;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; color: #FFF; flex-shrink: 0;
  }
  .anchor-check.open { background: transparent; border-color: #C9CBC4; }

  .win-toast {
    position: absolute; bottom: 80px; left: 0; right: 0;
    display: flex; justify-content: center; pointer-events: none; z-index: 20;
    opacity: 0; transition: opacity 0.3s;
  }
  .win-toast.visible { opacity: 1; }
  .win-toast-inner {
    padding: 12px 20px; border-radius: 9999px;
    font-size: 16px; font-weight: 600;
    background: #5C4A5E; color: #FFF;
    box-shadow: 0 2px 8px rgba(92,74,94,0.25);
  }

  .slot-freed {
    margin: 0 0 8px;
    padding: 14px 16px; border-radius: 14px;
    background: rgba(243,240,244,0.9);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(92,74,94,0.15);
    box-shadow: 0 2px 12px rgba(92,74,94,0.06);
    opacity: 0; transform: translateY(-6px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .slot-freed.visible { opacity: 1; transform: translateY(0); }
  .slot-freed-title { font-size: 15px; font-weight: 600; color: #5C4A5E; margin-bottom: 2px; }
  .slot-freed-body { font-size: 13px; color: #7A7E76; line-height: 1.5; }

  .cp-bar-track { position: relative; height: 8px; background: #F0F1EC; border-radius: 4px; margin: 6px 0 4px; overflow: hidden; }
  .cp-bar-fill { position: absolute; inset: 0 auto 0 0; border-radius: 4px; opacity: 0.85; width: 0%; transition: width 1s ease; }

  .patterns-title { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #5C4A5E; margin-bottom: 2px; padding: 24px 20px 0; }
  .patterns-sub { font-size: 16px; color: #8A8F86; margin-bottom: 20px; padding: 0 20px; }
</style>
</head>
<body>

<div class="progress-bar-wrap">
  <div class="progress-segment"><div class="progress-fill" id="prog0"></div></div>
  <div class="progress-segment"><div class="progress-fill" id="prog1"></div></div>
  <div class="progress-segment"><div class="progress-fill" id="prog2"></div></div>
</div>

<div class="phone-wrap">
  <div class="phone-frame">
    <div class="app-bg">

      <div class="status-bar">
        <span>9:41</span>
        <span style="display:flex;gap:5px;align-items:center">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="1" fill="#2B2F2A"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill="#2B2F2A"/><rect x="9" y="0" width="3" height="12" rx="1" fill="#2B2F2A"/><rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="#2B2F2A" opacity="0.35"/></svg>
          <svg width="16" height="12" viewBox="0 0 20 14" fill="none"><path d="M10 2.5C12.8 2.5 15.3 3.7 17 5.7L18.5 4.2C16.4 1.8 13.4 0.3 10 0.3C6.6 0.3 3.6 1.8 1.5 4.2L3 5.7C4.7 3.7 7.2 2.5 10 2.5Z" fill="#2B2F2A"/><path d="M10 6C12 6 13.8 6.9 15 8.3L16.5 6.8C14.9 5 12.6 4 10 4C7.4 4 5.1 5 3.5 6.8L5 8.3C6.2 6.9 8 6 10 6Z" fill="#2B2F2A"/><circle cx="10" cy="11.5" r="1.5" fill="#2B2F2A"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#2B2F2A" stroke-opacity="0.35"/><rect x="2" y="2" width="16" height="8" rx="2" fill="#2B2F2A"/><path d="M23 4.5V7.5C23.8 7.2 24.5 6.7 24.5 6C24.5 5.3 23.8 4.8 23 4.5Z" fill="#2B2F2A" opacity="0.4"/></svg>
        </span>
      </div>

      <div class="screen-container">

        <div class="screen active" id="screen0">
          <div class="checkin-inner">
            <h2 class="checkin-title">How are you arriving today?</h2>
            <p class="checkin-sub">Honest beats optimistic. The plan adjusts either way.</p>

            <div class="scale-row">
              <div class="scale-header">
                <span class="scale-label">Energy</span>
                <span class="scale-hint" id="hint-energy">Running on fumes &#8594; Plenty</span>
              </div>
              <div class="scale-buttons">
                <div class="scale-btn" data-scale="energy" data-val="1">1</div>
                <div class="scale-btn" data-scale="energy" data-val="2">2</div>
                <div class="scale-btn" data-scale="energy" data-val="3">3</div>
                <div class="scale-btn" data-scale="energy" data-val="4">4</div>
                <div class="scale-btn" data-scale="energy" data-val="5">5</div>
              </div>
            </div>

            <div class="scale-row">
              <div class="scale-header">
                <span class="scale-label">Focus</span>
                <span class="scale-hint" id="hint-focus">Static &#8594; Sharp</span>
              </div>
              <div class="scale-buttons">
                <div class="scale-btn" data-scale="focus" data-val="1">1</div>
                <div class="scale-btn" data-scale="focus" data-val="2">2</div>
                <div class="scale-btn" data-scale="focus" data-val="3">3</div>
                <div class="scale-btn" data-scale="focus" data-val="4">4</div>
                <div class="scale-btn" data-scale="focus" data-val="5">5</div>
              </div>
            </div>

            <div class="scale-row">
              <div class="scale-header">
                <span class="scale-label">Mood</span>
                <span class="scale-hint" id="hint-mood">Rough &#8594; Good</span>
              </div>
              <div class="scale-buttons">
                <div class="scale-btn" data-scale="mood" data-val="1">1</div>
                <div class="scale-btn" data-scale="mood" data-val="2">2</div>
                <div class="scale-btn" data-scale="mood" data-val="3">3</div>
                <div class="scale-btn" data-scale="mood" data-val="4">4</div>
                <div class="scale-btn" data-scale="mood" data-val="5">5</div>
              </div>
            </div>

            <div class="scale-row">
              <div class="scale-header">
                <span class="scale-label">Last night's sleep</span>
                <span class="scale-hint" id="hint-sleep">Awful &#8594; Solid</span>
              </div>
              <div class="scale-buttons">
                <div class="scale-btn" data-scale="sleep" data-val="1">1</div>
                <div class="scale-btn" data-scale="sleep" data-val="2">2</div>
                <div class="scale-btn" data-scale="sleep" data-val="3">3</div>
                <div class="scale-btn" data-scale="sleep" data-val="4">4</div>
                <div class="scale-btn" data-scale="sleep" data-val="5">5</div>
              </div>
            </div>

            <div class="factors-label">What is influencing your battery right now?</div>
            <div class="factors-hint">Things you can reasonably know this morning, not predictions.</div>
            <div class="factors-chips">
              <span class="chip active" id="chip-stress">Stress already present</span>
              <span class="chip" id="chip-sleep">Poor sleep</span>
              <span class="chip">Low energy on waking</span>
              <span class="chip">More&#8230;</span>
            </div>

            <input class="note-input" type="text" placeholder="One line, if you want (optional)" readonly>

            <div class="cap-result" id="cap-result"
              style="background:rgba(228,234,240,0.85);border:1px solid rgba(107,131,160,0.25)">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="color:#6B83A0;flex-shrink:0">
                <line x1="3" y1="7" x2="15" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="4.5" y1="11" x2="13.5" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700;color:#6B83A0">Steady Day</div>
                <div style="font-family:'Fraunces',Georgia,serif;font-size:16px;color:#2B2F2A;line-height:1.4;margin-top:2px">Steady day &#8212; not peak, not empty. Move deliberately.</div>
              </div>
            </div>

            <div style="margin-top:20px">
              <button class="btn-primary disabled" id="checkin-btn">Done, show me my day</button>
            </div>
          </div>
        </div>

        <div class="screen" id="screen1">

          <div class="cap-card" style="background:rgba(228,234,240,0.75);border:1px solid rgba(107,131,160,0.2)">
            <div class="cap-label-row">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="color:#6B83A0;flex-shrink:0">
                <line x1="3" y1="7" x2="15" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="4.5" y1="11" x2="13.5" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="cap-word" style="color:#6B83A0">Steady Day</span>
            </div>
            <div class="cap-line">Steady day &#8212; not peak, not empty. Move deliberately.</div>
            <div style="margin-top:8px;font-size:13px;color:#6B83A0;opacity:0.7">Capacity can change. Adjust today if reality has shifted. &#8594;</div>
          </div>

          <div class="card">
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:8px">
              <span style="font-size:16px;font-weight:600;color:#5C4A5E">Non-negotiables</span>
              <span style="font-size:13px;color:#9A9E96">These still need to happen today</span>
            </div>
            <div class="anchor-row">
              <span class="anchor-time">9:00</span>
              <span class="anchor-title-t">Work</span>
              <span class="anchor-check"><span>&#10003;</span></span>
            </div>
            <div class="anchor-row">
              <span class="anchor-time">3:15</span>
              <span class="anchor-title-t">School run</span>
              <span class="anchor-check open"></span>
            </div>
          </div>

          <div class="card">
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:10px">
              <span style="font-size:16px;font-weight:600;color:#5C4A5E">Basics</span>
              <span style="font-size:13px;color:#9A9E96">the wheels staying on</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              <span class="basics-pill done">&#10003; Walk dog</span>
              <span class="basics-pill">Plan dinner</span>
              <span class="basics-pill done">&#10003; Reset house</span>
            </div>
          </div>

          <div style="padding:0 16px">
            <div class="section-head">
              <span class="section-title">Today</span>
              <span class="section-sub" id="tasks-count">1 of 4 done</span>
            </div>

            <div class="task-row">
              <div class="task-circle done">&#10003;</div>
              <div style="flex:1">
                <div class="task-title done">Reply to landlord email</div>
              </div>
            </div>

            <div class="task-row" id="task2-row">
              <div class="task-circle" id="task2-circle"></div>
              <div style="flex:1">
                <div class="task-title" id="task2-title">Order repeat prescription</div>
                <div class="task-sub">make smaller</div>
              </div>
            </div>

            <div class="task-row" id="task3-row">
              <div class="task-circle"></div>
              <div style="flex:1">
                <div class="task-title">Book dentist appointment</div>
                <div class="task-sub">make smaller</div>
              </div>
            </div>

            <div class="task-row">
              <div class="task-circle"></div>
              <div style="flex:1">
                <div class="task-title">Send clothes order back</div>
                <div class="task-sub">make smaller</div>
              </div>
            </div>

            <div class="slot-freed" id="slot-freed">
              <div class="slot-freed-title">Slot freed up</div>
              <div class="slot-freed-body">Three is the cap. Completing one always opens space for something new.</div>
            </div>

            <div style="display:flex;gap:8px;margin-top:4px">
              <div style="flex:1;padding:12px 16px;border-radius:12px;font-size:18px;background:#FFF;border:1.5px solid #E3E4DE;color:#9A9E96">Add a task&#8230;</div>
              <div style="padding:12px 20px;border-radius:12px;font-weight:600;background:#5C4A5E;color:#FFF;font-size:16px">Add</div>
            </div>

            <div style="margin-top:16px;padding:16px;border-radius:16px;background:rgba(243,240,244,0.85);backdrop-filter:blur(8px);border:1px solid rgba(229,224,232,0.8);display:flex;align-items:center;justify-content:space-between;gap:12px">
              <div style="font-size:16px;font-weight:600;color:#5C4A5E">Brain saying no to all of it?</div>
              <span style="color:#5C4A5E;font-size:18px;font-weight:300">&#8594;</span>
            </div>
          </div>

          <div class="win-toast" id="win-toast">
            <div class="win-toast-inner">Off the list, out of your head.</div>
          </div>
        </div>

        <div class="screen" id="screen2">
          <div class="patterns-title">Patterns</div>
          <p class="patterns-sub">Last 28 days</p>

          <div class="card" style="margin-bottom:12px">
            <div style="font-size:16px;font-weight:600;color:#2B2F2A;margin-bottom:4px">Morning battery</div>
            <div style="font-size:13px;color:#8A8F86;margin:0 0 10px">Tap any day to see details</div>
            <div class="heatmap-grid" style="margin-bottom:4px">
              <div class="heatmap-day-label">Mo</div><div class="heatmap-day-label">Tu</div>
              <div class="heatmap-day-label">We</div><div class="heatmap-day-label">Th</div>
              <div class="heatmap-day-label">Fr</div><div class="heatmap-day-label">Sa</div>
              <div class="heatmap-day-label">Su</div>
            </div>
            <div id="heatmap-container"></div>
            <div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap">
              <div style="display:flex;align-items:center;gap:5px">
                <div style="width:10px;height:10px;border-radius:3px;background:#4A7B5C;flex-shrink:0"></div>
                <span style="font-size:13px;color:#7A7E76">Momentum (6)</span>
              </div>
              <div style="display:flex;align-items:center;gap:5px">
                <div style="width:10px;height:10px;border-radius:3px;background:#6B83A0;flex-shrink:0"></div>
                <span style="font-size:13px;color:#7A7E76">Steady (15)</span>
              </div>
              <div style="display:flex;align-items:center;gap:5px">
                <div style="width:10px;height:10px;border-radius:3px;background:#B96A6A;flex-shrink:0"></div>
                <span style="font-size:13px;color:#7A7E76">Low battery (5)</span>
              </div>
              <div style="display:flex;align-items:center;gap:5px">
                <div style="width:10px;height:10px;border-radius:3px;background:#EDEEE8;flex-shrink:0"></div>
                <span style="font-size:13px;color:#7A7E76">No log (2)</span>
              </div>
            </div>
          </div>

          <div class="insight-card" id="learned-card" style="background:#F3F0F4">
            <div class="insight-label" style="color:#5C4A5E">What I've learned</div>
            <div class="insight-item">
              <div class="insight-dot" style="background:#5C4A5E"></div>
              <p class="insight-text">Steady days are your most common starting point.</p>
            </div>
            <div class="insight-item">
              <div class="insight-dot" style="background:#5C4A5E"></div>
              <p class="insight-text">Poor sleep is the morning factor you've logged most often.</p>
            </div>
            <div class="insight-item">
              <div class="insight-dot" style="background:#5C4A5E"></div>
              <p class="insight-text">Sleep disruption tends to affect how you start the day more than how you finish it.</p>
            </div>
          </div>

          <div class="insight-card" id="good-card" style="background:#EAF4EE">
            <div class="insight-label" style="color:#2D5A3D">Good signs</div>
            <div class="insight-item" style="border-top-color:rgba(45,90,61,0.12)">
              <div class="insight-dot" style="background:#3A7A50"></div>
              <p class="insight-text">You recovered from Low Battery on 3 of your 5 Low Battery days.</p>
            </div>
            <div class="insight-item" style="border-top-color:rgba(45,90,61,0.12)">
              <div class="insight-dot" style="background:#3A7A50"></div>
              <p class="insight-text">You often finish stronger than you start &#8212; 18 of 26 logged days ended the same or better.</p>
            </div>
          </div>

          <div class="card" id="progress-card" style="opacity:0;transform:translateY(8px);transition:opacity 0.6s ease,transform 0.6s ease">
            <div style="font-size:12px;font-weight:700;color:#8A8F86;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">Capacity &amp; Progress</div>
            <div style="font-family:'Fraunces',Georgia,serif;font-size:19px;line-height:1.3;color:#2B2F2A;margin-bottom:6px">Planning stayed similar across capacity days. Completion varied.</div>
            <span style="display:inline-block;font-size:12px;padding:3px 10px;border-radius:20px;background:#F0F1EC;color:#5A5E56;font-weight:500;margin-bottom:18px">87% Momentum &#8594; 74% Steady &#8594; 41% Low Battery</span>
            <div style="display:grid;gap:14px">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                  <div style="display:flex;align-items:center;gap:7px">
                    <div style="width:9px;height:9px;border-radius:50%;background:#4A7B5C;flex-shrink:0"></div>
                    <span style="font-size:15px;font-weight:600;color:#2B2F2A">Momentum</span>
                  </div>
                  <span style="font-size:14px;font-weight:700;color:#2D5A3D">87%</span>
                </div>
                <div class="cp-bar-track"><div class="cp-bar-fill" id="bar-green" style="background:#4A7B5C"></div></div>
                <p style="font-size:12px;color:#9A9E96;margin:0;line-height:1.4">2.9 planned &#183; 2.5 done &#183; 6 days</p>
              </div>
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                  <div style="display:flex;align-items:center;gap:7px">
                    <div style="width:9px;height:9px;border-radius:50%;background:#6B83A0;flex-shrink:0"></div>
                    <span style="font-size:15px;font-weight:600;color:#2B2F2A">Steady</span>
                  </div>
                  <span style="font-size:14px;font-weight:700;color:#7A5E20">74%</span>
                </div>
                <div class="cp-bar-track"><div class="cp-bar-fill" id="bar-amber" style="background:#6B83A0"></div></div>
                <p style="font-size:12px;color:#9A9E96;margin:0;line-height:1.4">2.8 planned &#183; 2.1 done &#183; 15 days</p>
              </div>
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                  <div style="display:flex;align-items:center;gap:7px">
                    <div style="width:9px;height:9px;border-radius:50%;background:#B96A6A;flex-shrink:0"></div>
                    <span style="font-size:15px;font-weight:600;color:#2B2F2A">Low Battery</span>
                  </div>
                  <span style="font-size:14px;font-weight:700;color:#9A3A3A">41%</span>
                </div>
                <div class="cp-bar-track"><div class="cp-bar-fill" id="bar-red" style="background:#B96A6A"></div></div>
                <p style="font-size:12px;color:#9A9E96;margin:0;line-height:1.4">2.8 planned &#183; 1.1 done &#183; 5 days</p>
              </div>
            </div>
            <p style="font-size:13px;color:#6A6F68;margin:14px 0 0;line-height:1.5;padding-top:12px;border-top:1px solid #F0F1EC">
              Basics stayed more consistent than planned tasks across different capacity levels.
            </p>
          </div>

          <div style="height:16px"></div>
        </div>

      </div>

      <div class="tab-bar">
        <div class="tab-item"><span class="tab-label active" id="tab-today-label">Today</span></div>
        <div class="tab-item"><span class="tab-label">Capture</span></div>
        <div class="tab-item"><span class="tab-label" id="tab-patterns-label">Patterns</span></div>
        <div class="tab-item"><span class="tab-label" id="tab-yours-label">Yours</span></div>
      </div>

    </div>
  </div>
</div>

<div class="controls">
  <button class="nav-btn" onclick="prevScreen()">&#8592; Prev</button>
  <span class="screen-indicator" id="screen-indicator">Morning check-in &middot; 1 of 3</span>
  <button class="nav-btn" onclick="nextScreen()">Next &#8594;</button>
</div>

<script>
const SCREEN_DURATION = 7000
const SCREENS      = ['screen0','screen1','screen2']
const SCREEN_NAMES = ['Morning check-in · 1 of 3', 'Today · 2 of 3', 'Patterns · 3 of 3']
let currentScreen = 0
let autoTimer     = null
let animTimers    = []

const CAP_COLORS = { green:'#4A7B5C', amber:'#6B83A0', red:'#B96A6A', null:'#EDEEE8' }

function buildHeatmap() {
  const today = new Date()
  const firstDate = new Date(today)
  firstDate.setDate(firstDate.getDate() - 27)
  const dow = firstDate.getDay()
  const padStart = dow === 0 ? 6 : dow - 1

  const caps = [
    'red','amber','red','amber','green',null,'amber',
    'red','amber','green','amber',null,'red','amber',
    'amber','green','amber','red','amber','amber','green',
    'amber','red','amber','amber','green','amber','green',
  ]

  const container = document.getElementById('heatmap-container')
  const totalCells = padStart + 28
  const numRows = Math.ceil(totalCells / 7)
  let html = ''

  for (let row = 0; row < numRows; row++) {
    html += '<div class="heatmap-grid" style="margin-bottom:4px">'
    for (let col = 0; col < 7; col++) {
      const idx = row * 7 + col - padStart
      if (idx < 0 || idx >= 28) { html += '<div style="aspect-ratio:1"></div>'; continue }
      const d = new Date(today); d.setDate(d.getDate() - (27 - idx))
      const cap = caps[idx]
      const bg  = cap ? CAP_COLORS[cap] : CAP_COLORS.null
      const tc  = cap ? 'rgba(255,255,255,0.85)' : '#C0C2BB'
      html += '<div class="heatmap-cell" style="background:' + bg + ';color:' + tc + '">' + d.getDate() + '</div>'
    }
    html += '</div>'
  }
  container.innerHTML = html
}

function clearAnimTimers() { animTimers.forEach(function(t) { clearTimeout(t) }); animTimers = [] }
function animAfter(ms, fn) { var t = setTimeout(fn, ms); animTimers.push(t) }

function selectScale(scaleId, val) {
  document.querySelectorAll('[data-scale="' + scaleId + '"]').forEach(function(btn) {
    btn.classList.toggle('selected', parseInt(btn.dataset.val) === val)
  })
  var hint = document.getElementById('hint-' + scaleId)
  if (hint) hint.textContent = ''
}

function resetScreen0() {
  document.querySelectorAll('.scale-btn').forEach(function(b) { b.classList.remove('selected') })
  document.getElementById('hint-energy').textContent = 'Running on fumes → Plenty'
  document.getElementById('hint-focus').textContent  = 'Static → Sharp'
  document.getElementById('hint-mood').textContent   = 'Rough → Good'
  document.getElementById('hint-sleep').textContent  = 'Awful → Solid'
  document.getElementById('cap-result').classList.remove('visible')
  var btn = document.getElementById('checkin-btn')
  btn.classList.add('disabled')
  btn.classList.remove('pressing')
  document.getElementById('chip-stress').classList.add('active')
  document.getElementById('chip-sleep').classList.remove('active')
  document.getElementById('screen0').scrollTop = 0
}

function animScreen0() {
  resetScreen0()
  animAfter(600,  function() { selectScale('energy', 3) })
  animAfter(1150, function() { selectScale('focus',  3) })
  animAfter(1700, function() { selectScale('mood',   4) })
  animAfter(2250, function() { selectScale('sleep',  3) })
  animAfter(2700, function() {
    document.getElementById('cap-result').classList.add('visible')
    document.getElementById('chip-sleep').classList.add('active')
    document.getElementById('checkin-btn').classList.remove('disabled')
  })
  animAfter(5800, function() { document.getElementById('checkin-btn').classList.add('pressing') })
  animAfter(6300, function() { document.getElementById('checkin-btn').classList.remove('pressing') })
}

function resetScreen1() {
  var circle = document.getElementById('task2-circle')
  circle.classList.remove('done')
  circle.textContent = ''
  document.getElementById('task2-title').classList.remove('done')
  document.getElementById('task2-title').textContent = 'Order repeat prescription'
  document.getElementById('slot-freed').classList.remove('visible')
  document.getElementById('win-toast').classList.remove('visible')
  document.getElementById('tasks-count').textContent = '1 of 4 done'
  document.getElementById('screen1').scrollTop = 290
}

function animScreen1() {
  resetScreen1()
  animAfter(1800, function() {
    var circle = document.getElementById('task2-circle')
    circle.classList.add('done')
    circle.textContent = '✓'
    document.getElementById('task2-title').classList.add('done')
    document.getElementById('tasks-count').textContent = '2 of 4 done'
    document.getElementById('win-toast').classList.add('visible')
  })
  animAfter(3000, function() { document.getElementById('win-toast').classList.remove('visible') })
  animAfter(3400, function() { document.getElementById('slot-freed').classList.add('visible') })
  animAfter(5600, function() { document.getElementById('slot-freed').classList.remove('visible') })
}

function resetScreen2() {
  document.getElementById('learned-card').classList.remove('visible')
  document.getElementById('good-card').classList.remove('visible')
  var pc = document.getElementById('progress-card')
  pc.style.opacity = '0'; pc.style.transform = 'translateY(8px)'
  document.getElementById('bar-green').style.width = '0%'
  document.getElementById('bar-amber').style.width = '0%'
  document.getElementById('bar-red').style.width   = '0%'
  document.getElementById('screen2').scrollTop = 0
}

function animScreen2() {
  resetScreen2()
  animAfter(600,  function() { document.getElementById('learned-card').classList.add('visible') })
  animAfter(1600, function() { document.getElementById('good-card').classList.add('visible') })
  animAfter(2500, function() {
    var pc = document.getElementById('progress-card')
    pc.style.opacity = '1'; pc.style.transform = 'translateY(0)'
  })
  animAfter(2900, function() {
    document.getElementById('bar-green').style.width = '87%'
    document.getElementById('bar-amber').style.width = '74%'
    document.getElementById('bar-red').style.width   = '41%'
  })
}

function updateTabBar(idx) {
  document.getElementById('tab-today-label').classList.toggle('active', idx !== 2)
  document.getElementById('tab-patterns-label').classList.toggle('active', idx === 2)
  document.getElementById('tab-yours-label').classList.remove('active')
}

function startProgress(segIdx, duration) {
  var fill = document.getElementById('prog' + segIdx)
  fill.style.transition = 'none'
  fill.style.width = '0%'
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      fill.style.transition = 'width ' + duration + 'ms linear'
      fill.style.width = '100%'
    })
  })
}

function goToScreen(idx) {
  clearAnimTimers()
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null }
  SCREENS.forEach(function(id) { document.getElementById(id).classList.remove('active') })
  for (var i = 0; i < 3; i++) {
    var fill = document.getElementById('prog' + i)
    fill.style.transition = 'none'
    fill.style.width = i < idx ? '100%' : '0%'
  }
  currentScreen = idx
  document.getElementById(SCREENS[idx]).classList.add('active')
  document.getElementById('screen-indicator').textContent = SCREEN_NAMES[idx]
  updateTabBar(idx)
  startProgress(idx, SCREEN_DURATION)
  if (idx === 0) animScreen0()
  else if (idx === 1) animScreen1()
  else if (idx === 2) animScreen2()
  autoTimer = setTimeout(function() { goToScreen((idx + 1) % 3) }, SCREEN_DURATION)
}

function nextScreen() { goToScreen((currentScreen + 1) % 3) }
function prevScreen() { goToScreen((currentScreen + 2) % 3) }

buildHeatmap()
goToScreen(0)
</script>
</body>
</html>`

export default DEMO_HTML
