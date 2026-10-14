// Module dùng chung cho 3 trang. Không cần sửa file này.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInAnonymously, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, collection, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp, Timestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, SU_KIEN } from "./config.js";

export const daCauHinh = !!firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("DAN_");
export const app = daCauHinh ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;

export {
  SU_KIEN, signInAnonymously, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  doc, collection, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp, Timestamp, writeBatch
};

export const refCaiDat = () => doc(db, "settings", "main");
export const refUngVien = () => collection(db, "candidates");
export const refPhieu = () => collection(db, "votes");

// Trạng thái thực tế: "closed" (chưa mở) | "open" (đang mở) | "ended" (đã khóa / hết giờ)
export function trangThai(s) {
  if (!s) return "closed";
  if (s.status === "open") {
    if (s.endsAt && s.endsAt.toMillis() <= Date.now()) return "ended";
    return "open";
  }
  return s.status === "ended" ? "ended" : "closed";
}

export function conLai(s) {
  if (!s || s.status !== "open" || !s.endsAt) return null;
  return Math.max(0, s.endsAt.toMillis() - Date.now());
}

export const so2 = (n) => String(n ?? "").padStart(2, "0");

export function dongHo(ms) {
  const t = Math.ceil(ms / 1000);
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

export function demPhieu(votes) {
  const m = new Map();
  for (const v of votes) m.set(v.candidateId, (m.get(v.candidateId) || 0) + 1);
  return m;
}

export function linkBinhChon() {
  return SU_KIEN.linkBinhChon || new URL("index.html", location.href).href;
}

export function chuCai(name) {
  const parts = String(name || "").trim().split(/\s+/);
  return (parts[parts.length - 1] || "?").charAt(0).toUpperCase();
}

export function hienLoiCauHinh() {
  document.body.innerHTML = `
    <div class="setup-note">
      <h1>Chưa kết nối Firebase</h1>
      <p>Mở file <b>config.js</b>, dán đoạn <b>firebaseConfig</b> lấy từ Firebase Console, lưu lại rồi tải lại trang này.</p>
      <p>Các bước chi tiết có trong file <b>HUONG-DAN.md</b>.</p>
    </div>`;
}
