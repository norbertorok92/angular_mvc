import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class RestService {

  private _registerUrl = 'http://localhost:5000/api/register';
  private _loginUrl = 'http://localhost:5000/api/login';
  private _postsUrl = 'http://localhost:5000/api/posts';
  private _eventsUrl = 'http://localhost:5000/api/events';
  private _commentUrl = 'http://localhost:5000/api/comment';
  private _usersUrl = 'http://localhost:5000/api/users';

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  isLoggedIn() {
    return !!localStorage.getItem('loggedIn');
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('loggedIn');
    this._router.navigate(['/login']);
  }
// POSTS
  addPost(postData) {
    const loggedInUserId = localStorage.getItem('loggedIn');
    return this.http.post<any>(this._postsUrl + `/${loggedInUserId}`, postData);
  }

  editPost(postId, postData) {
    return this.http.put<any>(this._postsUrl + `/${postId}`, postData);
  }

  getPosts() {
    return this.http.get<any>(this._postsUrl);
  }

  deletePost(postId) {
    return this.http.delete<any>(this._postsUrl + `/${postId}`);
  }
// EVENTS
  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  deleteEvent(eventId) {
    return this.http.delete<any>(this._eventsUrl + `/${eventId}`);
  }
// COMMENTS
  addComment(postId, comment) {
    const loggedInUserId = localStorage.getItem('loggedIn');
    return this.http.post<any>(this._commentUrl + `/${postId}/${loggedInUserId}`, comment);
  }

  deleteComment(commentId) {
    return this.http.delete<any>(this._commentUrl + `/${commentId}`);
  }
// USERS
  getUser(userId) {
    return this.http.get<any>(this._usersUrl + `/${userId}`);
  }

  getOneUser(userId) {

  }

  subscribe(userId) {
    return this.http.put<any>(this._usersUrl + `/${userId}/subscribe`, {});
  }
}
