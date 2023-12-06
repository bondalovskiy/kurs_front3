import { getConfiguration } from "../../config"

const url = getConfiguration().apiUrl;
const clientUrl = getConfiguration().clientUrl;

export const AuthRequest = {
    Auth: url + '/oauth2/authorize/spotify?redirect_uri=' + encodeURIComponent(clientUrl + '/spotapp-frontend/#/callback')
}

export const GetRequest = {
    CurrentUser: url + '/user/me',
    LibraryAnalysis: url + '/api/spotify/analysis/library',
    Friends: url + '/member/me/following',
    Genre: url + '/api/spotify/genres/top?range=',
    Artist: url + '/api/spotify/artists/top?range=',
    Track: url + '/api/spotify/tracks/top?range=',
    History: url + '/api/spotify/tracks/history',
    UserPlaylists: url + '/api/spotify/playlist/all',
    UserPlaylistsId: url + '/api/spotify/playlist/all?external_id=',
    Profile: url + '/member/profile?user_id=',
    Match: url + '/api/spotify/analysis/match?user_id=',
    UserRanking: url + '/member/rank',
    Search: url + '/user/search?username=',
    BetaUsers: url + '/beta/all',
    BetaJoin: url + '/beta/join?name=',
    MatchingUsersLocation: url + '/api/location/users/matching',
    NearbyUsersLocation: url + '/api/location/users/nearby',
    MapToken: url + '/api/location/token'
}

export const PostRequest = {
    Notification: url + '/beta/activate',
    Logout: url + '/user/logout',
    PlaylistAnalysis: url + '/api/spotify/analysis/playlist',
    PlaylistBattle: url + '/api/spotify/analysis/battle?user_id=',
    PlaylistCreate: url + '/api/spotify/playlist/create?range=',
    Location: url + '/member/location'
}

export const PutRequest = {
    SocialLink: url + '/member/links',
    Follow: url + '/member/follow?user_id=',
    Unfollow: url + '/member/unfollow?user_id='
}

export const DeleteRequest = {
    Account: url + '/user/me/delete',
    BetaUsers: url + '/beta/delete'

}