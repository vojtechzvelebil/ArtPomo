// 18 Background Images Dataset
const backgroundImages = [
  { id: "img-1", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", title: "Tropical Paradise Coast", author: "Sean Oulashin", authorUrl: "https://unsplash.com/@oulashin" },
  { id: "img-2", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80", title: "Starry Night Mountain Milky Way", author: "ieszka J.", authorUrl: "https://unsplash.com/@anniespratt" },
  { id: "img-3", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80", title: "Misty Pine Forest Valley", author: "Bailey Zindel", authorUrl: "https://unsplash.com/@baileyzindel" },
  { id: "img-4", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80", title: "Snowy Alpine Peak Sunset", author: "Kalen Emsley", authorUrl: "https://unsplash.com/@kalenemsley" },
  { id: "img-5", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", title: "Yosemite Valley River Sunset", author: "Dan Meyers", authorUrl: "https://unsplash.com/@danmeyers" },
  { id: "img-6", url: "https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?auto=format&fit=crop&w=1920&q=80", title: "Grand Canyon Canyon View", author: "Kalen Emsley", authorUrl: "https://unsplash.com/@kalenemsley" },
  { id: "img-7", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80", title: "Sunlit Green Forest Canopy", author: "Luca Bravo", authorUrl: "https://unsplash.com/@lucabravo" },
  { id: "img-8", url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=80", title: "Snow Mountain Range Vista", author: "Guillaume", authorUrl: "https://unsplash.com/@guillaume" },
  { id: "img-9", url: "https://images.unsplash.com/photo-1511497584788-876761142212?auto=format&fit=crop&w=1920&q=80", title: "Deep Lush Mossy Woodland", author: "Javier Allegue Barros", authorUrl: "https://unsplash.com/@javieralleguebarros" },
  { id: "img-10", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80", title: "Serene Lake Reflection", author: "Vince Fleming", authorUrl: "https://unsplash.com/@vincefleming" },
  { id: "img-11", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80", title: "Desert Sand Dunes Sunrise", author: "Külli Kittus", authorUrl: "https://unsplash.com/@kyullikittus" },
  { id: "img-12", url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80", title: "Sun Rays Through Pine Trees", author: "Sasha Freemind", authorUrl: "https://unsplash.com/@sashafreemind" },
  { id: "img-13", url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&q=80", title: "Waterfall in Autumn Forest", author: "Davide Cantelli", authorUrl: "https://unsplash.com/@davidecantelli" },
  { id: "img-14", url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80", title: "Rolling Green Meadow Hills", author: "Bailey Zindel", authorUrl: "https://unsplash.com/@baileyzindel" },
  { id: "img-15", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80", title: "Hiker Overlooking Mountain Horizon", author: "Christopher Sardegna", authorUrl: "https://unsplash.com/@csardegna" },
  { id: "img-16", url: "https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?auto=format&fit=crop&w=1920&q=80", title: "Horizon Cloudscape", author: "Kalen Emsley", authorUrl: "https://unsplash.com/@kalenemsley" },
  { id: "img-17", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80", title: "Misty Sunrise Valley", author: "Bailey Zindel", authorUrl: "https://unsplash.com/@baileyzindel" },
  { id: "img-18", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", title: "Golden Ocean Waves", author: "Sean Oulashin", authorUrl: "https://unsplash.com/@oulashin" }
];

// 16 Built-in MP3 Music Tracks Dataset
// Requirement 3: Use  for all music track URLs while keeping distinct covers and attributions
const musicTracks = [
  { id: "track-1", title: "Chill Bro", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80" },
  { id: "track-2", title: "Getting Ready", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80" },
  { id: "track-3", title: "Hazy After Hours", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80" },
  { id: "track-4", title: "Serene View", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80" },
  { id: "track-5", title: "Dreaming", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80" },
  { id: "track-6", title: "Acoustic Breeze", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80" },
  { id: "track-7", title: "Valley Sunset", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80" },
  { id: "track-8", title: "TC4", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=300&q=80" },
  { id: "track-9", title: "Sun and His Daughter", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=300&q=80" },
  { id: "track-10", title: "Slow Trail", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=300&q=80" },
  { id: "track-11", title: "CORAL", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80" },
  { id: "track-12", title: "Comedie", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80" },
  { id: "track-13", title: "Tech House Vibes", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&q=80" },
  { id: "track-14", title: "Deep Urban", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=300&q=80" },
  { id: "track-15", title: "Summer Breeze", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80" },
  { id: "track-16", title: "Raising Me", author: "Mixkit", authorUrl: "https://mixkit.co", url: "marsyas.mp3", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80" }
];

let tasks = JSON.parse(localStorage.getItem('artpomo_tasks')) || [];
let collectedGallery = JSON.parse(localStorage.getItem('artpomo_collected')) || [];
let selectedGalleryBg = JSON.parse(localStorage.getItem('artpomo_selected_bg')) !== undefined ? JSON.parse(localStorage.getItem('artpomo_selected_bg')) : 'blank';

let collectedMusic = JSON.parse(localStorage.getItem('artpomo_collected_music')) || [];
let selectedMusicTrack = JSON.parse(localStorage.getItem('artpomo_selected_music')) !== undefined ? JSON.parse(localStorage.getItem('artpomo_selected_music')) : 'random';

let currentImageIndex = 0;
let currentMusicIndex = 0;
let alertTimeout = null;
let musicAlertTimeout = null;

const DURATIONS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60
};
let currentMode = 'work';
let timeLeft = DURATIONS.work;
let timerInterval = null;
let isRunning = false;
let isAudioPlaying = false;

const appBody = document.getElementById('app-body');
const bgAudio = document.getElementById('bg-audio');

const sessionAlert = document.getElementById('session-alert');
const alertStep1 = document.getElementById('alert-step-1');
const alertStep2 = document.getElementById('alert-step-2');
const alertImgTitle = document.getElementById('alert-img-title');
const alertImgAuthorName = document.getElementById('alert-img-author-name');
const alertThumbnail = document.getElementById('alert-thumbnail');
const focusingMessageText = document.getElementById('focusing-message-text');
const copiedNotification = document.getElementById('copied-notification');

const musicAlert = document.getElementById('music-alert');
const musicAlertStep1 = document.getElementById('music-alert-step-1');
const musicAlertStep2 = document.getElementById('music-alert-step-2');
const musicAlertTitle = document.getElementById('music-alert-title');
const musicAlertAuthor = document.getElementById('music-alert-author');
const musicAlertThumbnail = document.getElementById('music-alert-thumbnail');
const musicFocusingMessageText = document.getElementById('music-focusing-message-text');
const musicCopiedNotification = document.getElementById('music-copied-notification');

const playerCurrentCover = document.getElementById('player-current-cover');
const playerCurrentTitle = document.getElementById('player-current-title');
const playerPlayBtn = document.getElementById('player-play-btn');
const playerPlayIcon = document.getElementById('player-play-icon');
const playerPlayText = document.getElementById('player-play-text');

const galleryModal = document.getElementById('gallery-modal');
const openGalleryBtn = document.getElementById('open-gallery-btn');
const galleryCloseBtn = document.getElementById('gallery-close-btn');
const galleryGrid = document.getElementById('gallery-grid');
const galleryCountSpan = document.getElementById('gallery-count-span');

const musicModal = document.getElementById('music-modal');
const openMusicBtn = document.getElementById('open-music-btn');
const musicCloseBtn = document.getElementById('music-close-btn');
const musicGrid = document.getElementById('music-grid');
const musicCountSpan = document.getElementById('music-count-span');

const registrationModal = document.getElementById('registration-modal');
const closeRegModalBtn = document.getElementById('close-reg-modal-btn');
const regForm = document.getElementById('reg-form');
const regModalTitle = document.getElementById('reg-modal-title');
const regModalDesc = document.getElementById('reg-modal-desc');

const conditionsModal = document.getElementById('conditions-modal');
const openConditionsBtn = document.getElementById('open-conditions-btn');
const conditionsCloseBtn = document.getElementById('conditions-close-btn');

const artistsDropdownBtn = document.getElementById('artists-dropdown-btn');
const artistsDropdownMenu = document.getElementById('artists-dropdown-menu');

const timerDisplay = document.getElementById('timer-display');
const timerProgress = document.getElementById('timer-progress');
const timerToggleBtn = document.getElementById('timer-toggle-btn');
const timerToggleText = document.getElementById('timer-toggle-text');
const playIcon = document.getElementById('play-icon');
const modeButtons = document.querySelectorAll('.mode-btn');
const devFinishBtn = document.getElementById('dev-finish-btn');

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskListContainer = document.getElementById('task-list');
const emptyTasks = document.getElementById('empty-tasks');
const taskCounter = document.getElementById('task-counter');

const CIRCUMFERENCE = 2 * Math.PI * 44;

function saveState() {
  localStorage.setItem('artpomo_tasks', JSON.stringify(tasks));
  localStorage.setItem('artpomo_collected', JSON.stringify(collectedGallery));
  localStorage.setItem('artpomo_selected_bg', JSON.stringify(selectedGalleryBg));
  localStorage.setItem('artpomo_collected_music', JSON.stringify(collectedMusic));
  localStorage.setItem('artpomo_selected_music', JSON.stringify(selectedMusicTrack));
}

function applyImageByIndex(index) {
  currentImageIndex = index;
  const imgData = backgroundImages[currentImageIndex];
  appBody.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.45)), url('${imgData.url}')`;
}

function setInitialOrRandomBackground() {
  if (selectedGalleryBg === 'blank') {
      const randIdx = Math.floor(Math.random() * backgroundImages.length);
      applyImageByIndex(randIdx);
  } else {
      const foundIdx = backgroundImages.findIndex(img => img.id === selectedGalleryBg);
      if (foundIdx !== -1) {
          applyImageByIndex(foundIdx);
      } else {
          applyImageByIndex(0);
      }
  }
}

function applyMusicTrackByIndex(index) {
  currentMusicIndex = index;
  const track = musicTracks[currentMusicIndex];
  bgAudio.src = track.url;
  playerCurrentCover.src = track.cover;
  playerCurrentTitle.textContent = track.title;
  if (isAudioPlaying) {
      bgAudio.play().catch(e => console.log("Audio play error:", e));
  }
}

function setInitialOrRandomMusic() {
  if (selectedMusicTrack === 'random') {
      const randIdx = Math.floor(Math.random() * musicTracks.length);
      applyMusicTrackByIndex(randIdx);
  } else {
      const foundIdx = musicTracks.findIndex(t => t.id === selectedMusicTrack);
      if (foundIdx !== -1) {
          applyMusicTrackByIndex(foundIdx);
      } else {
          applyMusicTrackByIndex(0);
      }
  }
}


// Session completion triggers Image alert
function triggerSessionCompletion(modeType) {
  if (modeType !== 'work') return;

  if (selectedGalleryBg === 'blank') {
      let newIndex;
      do {
          newIndex = Math.floor(Math.random() * backgroundImages.length);
      } while (newIndex === currentImageIndex && backgroundImages.length > 1);
      applyImageByIndex(newIndex);

      const currentImg = backgroundImages[currentImageIndex];
      if (!collectedGallery.includes(currentImg.id)) {
          alertImgTitle.textContent = currentImg.title;
          alertImgAuthorName.textContent = currentImg.author;
          alertThumbnail.src = currentImg.url;

          alertStep1.classList.remove('hidden');
          alertStep2.classList.add('hidden');
          copiedNotification.classList.add('hidden');

          sessionAlert.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
          sessionAlert.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

          if (alertTimeout) clearTimeout(alertTimeout);
          alertTimeout = setTimeout(() => dismissAlert(), 10000);
      }
  } else {
      const foundIdx = backgroundImages.findIndex(img => img.id === selectedGalleryBg);
      if (foundIdx !== -1) applyImageByIndex(foundIdx);
  }
}

// Task completion triggers Music alert (Only if track is NOT already in collected list)
// Requirement 1: Do NOT change the music track when a task is ticked off / marked as finished
function triggerTaskCompletion() {
  const currentTrack = musicTracks[currentMusicIndex];

  // Check if track is already collected
  if (collectedMusic.includes(currentTrack.id)) {
      return; // Do not show music alert if already collected
  }

  musicAlertTitle.textContent = currentTrack.title;
  musicAlertAuthor.textContent = currentTrack.author;
  musicAlertThumbnail.src = currentTrack.cover;

  musicAlertStep1.classList.remove('hidden');
  musicAlertStep2.classList.add('hidden');
  musicCopiedNotification.classList.add('hidden');

  musicAlert.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
  musicAlert.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

  if (musicAlertTimeout) clearTimeout(musicAlertTimeout);
  musicAlertTimeout = setTimeout(() => dismissMusicAlert(), 10000);
}

function dismissAlert() {
  sessionAlert.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  sessionAlert.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
  if (alertTimeout) clearTimeout(alertTimeout);
}

function dismissMusicAlert() {
  musicAlert.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  musicAlert.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
  if (musicAlertTimeout) clearTimeout(musicAlertTimeout);
}

document.getElementById('dismiss-alert-btn').addEventListener('click', dismissAlert);
document.getElementById('dismiss-music-alert-btn').addEventListener('click', dismissMusicAlert);

function handleCollectClick() {
  if (alertTimeout) clearTimeout(alertTimeout);
  const currentImg = backgroundImages[currentImageIndex];

  if (!collectedGallery.includes(currentImg.id)) {
      if (collectedGallery.length >= 18) {
          dismissAlert();
          showRegistrationModal('image');
          return;
      }
      collectedGallery.push(currentImg.id);
      saveState();
  }

  alertStep1.classList.add('hidden');
  sessionAlert.classList.remove('translate-y-0', 'opacity-100');
  sessionAlert.classList.add('-translate-y-full', 'opacity-0');

  setTimeout(() => {
      const currentTrack = musicTracks[currentMusicIndex];
      let message = "";
      if (isAudioPlaying && currentTrack) {
          message = `focusing with ${currentImg.author} <a href="${currentImg.authorUrl}" target="_blank" class="underline text-rose-700 font-semibold">${currentImg.authorUrl}</a> and ${currentTrack.author} <a href="${currentTrack.authorUrl}" target="_blank" class="underline text-blue-700 font-semibold">${currentTrack.authorUrl}</a>`;
      } else {
          message = `focusing with ${currentImg.author} <a href="${currentImg.authorUrl}" target="_blank" class="underline text-rose-700 font-semibold">${currentImg.authorUrl}</a>`;
      }

      focusingMessageText.innerHTML = message;
      alertStep2.classList.remove('hidden');

      sessionAlert.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      sessionAlert.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

      if (alertTimeout) clearTimeout(alertTimeout);
      alertTimeout = setTimeout(() => dismissAlert(), 10000);
  }, 300);
}

document.getElementById('collect-img-btn').addEventListener('click', handleCollectClick);

function handleCollectMusicClick() {
  if (musicAlertTimeout) clearTimeout(musicAlertTimeout);
  const currentTrack = musicTracks[currentMusicIndex];
  const currentImg = backgroundImages[currentImageIndex];

  if (!collectedMusic.includes(currentTrack.id)) {
      if (collectedMusic.length >= 16) {
          dismissMusicAlert();
          showRegistrationModal('music');
          return;
      }
      collectedMusic.push(currentTrack.id);
      saveState();
  }

  musicAlertStep1.classList.add('hidden');
  musicAlert.classList.remove('translate-y-0', 'opacity-100');
  musicAlert.classList.add('-translate-y-full', 'opacity-0');

  setTimeout(() => {
      const combinedMessage = `focusing with ${currentImg.author} <a href="${currentImg.authorUrl}" target="_blank" class="underline text-rose-700 font-semibold">${currentImg.authorUrl}</a> and ${currentTrack.author} <a href="${currentTrack.authorUrl}" target="_blank" class="underline text-blue-700 font-semibold">${currentTrack.authorUrl}</a>`;
      musicFocusingMessageText.innerHTML = combinedMessage;
      musicAlertStep2.classList.remove('hidden');

      musicAlert.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      musicAlert.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

      if (musicAlertTimeout) clearTimeout(musicAlertTimeout);
      musicAlertTimeout = setTimeout(() => dismissMusicAlert(), 10000);
  }, 300);
}

document.getElementById('collect-music-btn').addEventListener('click', handleCollectMusicClick);

function showRegistrationModal(type) {
  if (type === 'music') {
      regModalTitle.textContent = "Music Collection Complete! 🎵";
      regModalDesc.textContent = "You have collected all 16 music tracks! Register for a free account to unlock unlimited storage.";
  } else {
      regModalTitle.textContent = "Gallery Limit Reached! 🖼️";
      regModalDesc.textContent = "You have collected all 18 standard background images! Register for a free account to unlock an unlimited collection.";
  }
  registrationModal.classList.remove('hidden');
}

function showCopiedBadge() {
  copiedNotification.classList.remove('hidden');
  setTimeout(() => copiedNotification.classList.add('hidden'), 2500);
}

function showMusicCopiedBadge() {
  musicCopiedNotification.classList.remove('hidden');
  setTimeout(() => musicCopiedNotification.classList.add('hidden'), 2500);
}

function copyFocusMessage() {
  const currentImg = backgroundImages[currentImageIndex];
  const currentTrack = musicTracks[currentMusicIndex];
  let textToCopy = "";
  if (isAudioPlaying && currentTrack) {
      textToCopy = `focusing with ${currentImg.author} ${currentImg.authorUrl} and ${currentTrack.author} ${currentTrack.authorUrl}`;
  } else {
      textToCopy = `focusing with ${currentImg.author} ${currentImg.authorUrl}`;
  }

  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  try {
      document.execCommand('copy');
      showCopiedBadge();
  } catch (err) {
      console.error('Failed to copy', err);
  }
  document.body.removeChild(textArea);
}

function copyMusicFocusMessage() {
  const currentImg = backgroundImages[currentImageIndex];
  const currentTrack = musicTracks[currentMusicIndex];
  const textToCopy = `focusing with ${currentImg.author} ${currentImg.authorUrl} and ${currentTrack.author} ${currentTrack.authorUrl}`;

  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  try {
      document.execCommand('copy');
      showMusicCopiedBadge();
  } catch (err) {
      console.error('Failed to copy', err);
  }
  document.body.removeChild(textArea);
}

document.getElementById('copy-msg-btn').addEventListener('click', copyFocusMessage);
document.getElementById('music-copy-msg-btn').addEventListener('click', copyMusicFocusMessage);

function shareOnSocial(platform) {
  copyFocusMessage();
  const currentImg = backgroundImages[currentImageIndex];
  const text = `Focusing with ${currentImg.author}!`;
  const url = currentImg.authorUrl;
  if (platform === 'twitter') {
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

function shareMusicOnSocial(platform) {
  copyMusicFocusMessage();
  const currentTrack = musicTracks[currentMusicIndex];
  const text = `Focusing with ${currentTrack.author} music!`;
  const url = currentTrack.authorUrl;
  if (platform === 'twitter') {
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

document.getElementById('share-twitter-btn').addEventListener('click', () => shareOnSocial('twitter'));
document.getElementById('music-share-twitter-btn').addEventListener('click', () => shareMusicOnSocial('twitter'));

// Dropdown toggle for For Artists
artistsDropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  artistsDropdownMenu.classList.toggle('hidden');
});

window.addEventListener('click', () => {
  if (!artistsDropdownMenu.classList.contains('hidden')) {
      artistsDropdownMenu.classList.add('hidden');
  }
});

openGalleryBtn.addEventListener('click', () => {
  renderGallery();
  galleryModal.classList.remove('hidden');
});

galleryCloseBtn.addEventListener('click', () => galleryModal.classList.add('hidden'));

openMusicBtn.addEventListener('click', () => {
  renderMusicModal();
  musicModal.classList.remove('hidden');
});

musicCloseBtn.addEventListener('click', () => musicModal.classList.add('hidden'));

closeRegModalBtn.addEventListener('click', () => registrationModal.classList.add('hidden'));

openConditionsBtn.addEventListener('click', () => conditionsModal.classList.remove('hidden'));
conditionsCloseBtn.addEventListener('click', () => conditionsModal.classList.add('hidden'));

regForm.addEventListener('submit', (e) => {
  e.preventDefault();
  registrationModal.classList.add('hidden');
  alert("Registration successful! Unlimited storage unlocked.");
});

function renderGallery() {
  galleryGrid.innerHTML = '';
  galleryCountSpan.textContent = collectedGallery.length + 1;

  const isBlankSelected = selectedGalleryBg === 'blank';
  const blankCard = document.createElement('div');
  blankCard.className = `rounded-2xl p-4 border-2 transition flex flex-col items-center justify-center text-center aspect-video ${isBlankSelected ? 'border-rose-500 bg-rose-500/10 shadow-md ring-2 ring-rose-500/50' : 'border-slate-300/80 bg-white/60 hover:bg-white/80'}`;
  blankCard.innerHTML = `
      <div class="text-3xl mb-1">🔲</div>
      <h4 class="font-bold text-slate-900 text-sm">Blank Frame</h4>
      <p class="text-xs text-slate-500 mt-0.5">Randomizes on completion</p>
      ${isBlankSelected ? '<span class="mt-2 text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full font-semibold">Active</span>' : ''}
  `;
  blankCard.addEventListener('click', () => {
      selectedGalleryBg = 'blank';
      saveState();
      renderGallery();
  });
  galleryGrid.appendChild(blankCard);

  backgroundImages.forEach(img => {
      if (!collectedGallery.includes(img.id)) return;
      const isSelected = selectedGalleryBg === img.id;

      const card = document.createElement('div');
      card.className = `rounded-2xl p-3 border-2 transition flex flex-col justify-between relative overflow-hidden aspect-video bg-cover bg-center ${isSelected ? 'border-rose-500 shadow-lg ring-2 ring-rose-500/50' : 'border-slate-300 hover:border-slate-400 shadow-sm'}`;
      card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${img.url}')`;

      card.innerHTML = `
          <div class="flex justify-end items-start z-10">
              ${isSelected ? '<span class="text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full font-semibold">Active</span>' : ''}
          </div>
          <div class="z-10">
              <h4 class="text-white font-bold text-xs truncate">${img.title}</h4>
              <p class="text-slate-200 text-[10px]">by ${img.author}</p>
          </div>
      `;

      card.addEventListener('click', () => {
          selectedGalleryBg = img.id;
          saveState();
          renderGallery();
          const idx = backgroundImages.findIndex(b => b.id === img.id);
          applyImageByIndex(idx);
      });
      galleryGrid.appendChild(card);
  });
}

function renderMusicModal() {
  musicGrid.innerHTML = '';
  musicCountSpan.textContent = collectedMusic.length + 1;

  const isRandomSelected = selectedMusicTrack === 'random';
  const randomCard = document.createElement('div');
  randomCard.className = `rounded-2xl p-4 border-2 transition flex flex-col items-center justify-center text-center aspect-video ${isRandomSelected ? 'border-blue-600 bg-blue-600/10 shadow-md ring-2 ring-blue-600/50' : 'border-slate-300/80 bg-white/60 hover:bg-white/80'}`;
  randomCard.innerHTML = `
      <div class="text-3xl mb-1">🎲</div>
      <h4 class="font-bold text-slate-900 text-sm">Random Track</h4>
      <p class="text-xs text-slate-500 mt-0.5">Randomizes on new session</p>
      ${isRandomSelected ? '<span class="mt-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">Active</span>' : ''}
  `;
  randomCard.addEventListener('click', () => {
      selectedMusicTrack = 'random';
      saveState();
      renderMusicModal();
  });
  musicGrid.appendChild(randomCard);

  musicTracks.forEach(track => {
      if (!collectedMusic.includes(track.id)) return;
      const isSelected = selectedMusicTrack === track.id;

      const card = document.createElement('div');
      card.className = `rounded-2xl p-3 border-2 transition flex flex-col justify-between relative overflow-hidden aspect-video bg-cover bg-center ${isSelected ? 'border-blue-600 shadow-lg ring-2 ring-blue-600/50' : 'border-slate-300 hover:border-slate-400 shadow-sm'}`;
      card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${track.cover}')`;

      card.innerHTML = `
          <div class="flex justify-end items-start z-10">
              ${isSelected ? '<span class="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">Active</span>' : ''}
          </div>
          <div class="z-10">
              <h4 class="text-white font-bold text-xs truncate">${track.title}</h4>
              <p class="text-slate-200 text-[10px]">by ${track.author}</p>
          </div>
      `;

      card.addEventListener('click', () => {
          selectedMusicTrack = track.id;
          saveState();
          renderMusicModal();
          const idx = musicTracks.findIndex(t => t.id === track.id);
          applyMusicTrackByIndex(idx);
      });
      musicGrid.appendChild(card);
  });
}

function setMode(mode) {
  pauseTimer();
  currentMode = mode;
  timeLeft = DURATIONS[mode];

  modeButtons.forEach(btn => {
      if (btn.dataset.mode === mode) {
          btn.className = "mode-btn flex-1 py-1.5 text-sm font-semibold rounded-xl transition bg-rose-500 text-white shadow-md";
      } else {
          btn.className = "mode-btn flex-1 py-1.5 text-sm font-semibold rounded-xl transition text-slate-800 hover:text-slate-950";
      }
  });

  updateDisplay();
}

modeButtons.forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const totalDuration = DURATIONS[currentMode];
  const progress = timeLeft / totalDuration;
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  timerProgress.style.strokeDashoffset = strokeDashoffset;

  document.title = `${timerDisplay.textContent} - ArtPomo`;
}

function toggleTimer() {
  if (isRunning) {
      pauseTimer();
  } else {
      startTimer();
  }
}

function startTimer() {
  if (isRunning) return;

  // Requirement 1: Change current music track on start of a new session if random track option is chosen
  if (selectedMusicTrack === 'random' && currentMode === 'work') {
      let newMusicIdx;
      do {
          newMusicIdx = Math.floor(Math.random() * musicTracks.length);
      } while (newMusicIdx === currentMusicIndex && musicTracks.length > 1);
      applyMusicTrackByIndex(newMusicIdx);
  }

  isRunning = true;
  timerToggleText.textContent = "Pause Session";
  playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

  timerInterval = setInterval(() => {
      if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
      } else {
          clearInterval(timerInterval);
          isRunning = false;
          timerToggleText.textContent = "Start Session";
          playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';

          const finishedMode = currentMode;
          triggerSessionCompletion(finishedMode);

          if (finishedMode === 'work') {
              setMode('shortBreak');
          } else {
              setMode('work');
          }
      }
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
  timerToggleText.textContent = "Resume Session";
  playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
}

timerToggleBtn.addEventListener('click', toggleTimer);

devFinishBtn.addEventListener('click', () => {
  pauseTimer();
  const finishedMode = currentMode;
  triggerSessionCompletion(finishedMode);
  timeLeft = 0;
  updateDisplay();
  if (finishedMode === 'work') {
      setMode('shortBreak');
  } else {
      setMode('work');
  }
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ id: Date.now().toString(), text, completed: false });
  saveState();
  taskInput.value = '';
  renderTasks();
});

function toggleTask(id) {
  let wasCompleted = false;
  tasks = tasks.map(t => {
      if (t.id === id) {
          const nextCompleted = !t.completed;
          if (nextCompleted) wasCompleted = true;
          return { ...t, completed: nextCompleted };
      }
      return t;
  });
  saveState();
  renderTasks();

  if (wasCompleted) {
      triggerTaskCompletion();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveState();
  renderTasks();
}

function renderTasks() {
  taskListContainer.innerHTML = '';

  if (tasks.length === 0) {
      emptyTasks.classList.remove('hidden');
  } else {
      emptyTasks.classList.add('hidden');
      tasks.forEach(task => {
          const taskItem = document.createElement('div');
          taskItem.className = `flex items-center justify-between p-3.5 rounded-xl border transition-all ${task.completed ? 'bg-white/10 border-white/20 text-slate-500 line-through' : 'bg-white/25 border-white/35 text-slate-900 shadow-sm'}`;

          taskItem.innerHTML = `
              <div class="flex items-center space-x-3 overflow-hidden">
                  <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" class="task-checkbox w-4 h-4 accent-rose-500 rounded">
                  <span class="truncate text-sm font-medium">${escapeHtml(task.text)}</span>
              </div>
              <button data-id="${task.id}" class="delete-task-btn text-slate-600 hover:text-rose-600 p-1 transition">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              </button>
          `;
          taskListContainer.appendChild(taskItem);
      });

      document.querySelectorAll('.task-checkbox').forEach(box => {
          box.addEventListener('change', (e) => toggleTask(e.target.dataset.id));
      });
      document.querySelectorAll('.delete-task-btn').forEach(btn => {
          btn.addEventListener('click', (e) => deleteTask(e.currentTarget.dataset.id));
      });
  }

  const completedCount = tasks.filter(t => t.completed).length;
  taskCounter.textContent = `${completedCount}/${tasks.length} completed`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

window.addEventListener('DOMContentLoaded', () => {
  timerProgress.style.strokeDasharray = CIRCUMFERENCE;
  setInitialOrRandomBackground();
  setInitialOrRandomMusic();
  renderTasks();
  updateDisplay();
});



//! Youtube - needs a live domain
let player;
const button = document.getElementById("custom-play");
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    width: "480",
    height: "270",
    videoId: "M7lc1UVf-VE",
    playerVars: {
      controls: 1,
      playsinline: 1
    },
    events: {
      onReady: function () {},
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.PLAYING) {
          button.textContent = "Ⅱ";
        } else {
          button.textContent = "▶";
        }
      }
    }
  });
}

button.addEventListener("click", function () {
  if (!player) return;

  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});
