import {addPostAC, profileReducer} from "../profilePageReducer";

it('new post should be added', () => {
    let action = addPostAC('Incubator')

    let state = {
        posts: [
            {id: 1, likeCount: 12, message: 'Hello World'},
            {id: 2, likeCount: 12, message: 'Move Itd'}
        ],
        profile: null,
        status: ''
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})
