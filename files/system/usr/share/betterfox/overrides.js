/**** Personal overrides — appended AFTER Betterfox, so these win. ****
 * Mirrors the Brave managed-policy decisions so both browsers behave the same.
 * Betterfox stays untouched upstream; replace user.js alone to update it.
 */

/* --- Tracking: Strict ETP. Firefox's equivalent of Brave Shields Aggressive. */
user_pref("browser.contentblocking.category", "strict");

/* --- WebRTC: hide LAN + tailnet IPs, but DO NOT break calls.
 * default_address_only is the safe setting. Do NOT set
 * media.peerconnection.enabled=false — that kills video calls entirely. */
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", false);

/* --- Location: matches the geoclue lockdown + Brave DefaultGeolocationSetting */
user_pref("permissions.default.geo", 2);
user_pref("geo.enabled", false);

/* --- Notifications blocked, same as Brave DefaultNotificationsSetting */
user_pref("permissions.default.desktop-notification", 2);

/* --- Hardware APIs: same set Brave blocks by policy.
 * Camera and mic are deliberately left at "ask" so calls still work. */
user_pref("dom.webusb.enabled", false);
user_pref("dom.serial.enabled", false);
user_pref("dom.webmidi.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("dom.battery.enabled", false);

/* --- Telemetry belt-and-braces */
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);

/* --- No Pocket, no sponsored tiles */
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

/* --- Hardware video decode on the Intel iGPU (NOT the RTX 2060).
 * Same reasoning as Brave: keeps the dGPU asleep, saves heat on the G7. */
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);

/**** Round 2 — caught from a live about:config dump, 2026-08-01 ****/

/* --- DoH OFF. Firefox self-enabled DoH to Cloudflare (doh-rollout.mode=2),
 * which bypasses systemd-resolved -> Quad9 -> DoT entirely. mode 5 = user
 * disabled, and it stops the rollout re-enabling itself. */
user_pref("network.trr.mode", 5);
user_pref("doh-rollout.disable-heuristics", true);
user_pref("doh-rollout.self-enabled", false);

/* --- Mozilla IP Protection / VPN: on by default, with a full server list
 * already cached to disk. Not something we asked for. */
user_pref("browser.ipProtection.enabled", false);

/* --- New tab profiling that survived Betterfox */
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", false);

/* --- Nimbus experiment enrolment (you were in "10 Shortcuts Per Row v2") */
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);

/* --- AI chat still listed in the sidebar despite browser.ml.enable=false */
user_pref("sidebar.main.tools", "syncedtabs,history,bookmarks,opentabs");
