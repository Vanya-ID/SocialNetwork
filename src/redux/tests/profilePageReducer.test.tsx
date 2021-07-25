import {addPostAC, deletePost, profileReducer} from "../profilePageReducer";

let state = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    profile: null,
    status: ''
}

it('new post should be added', () => {
    let action = addPostAC('Incubator')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it('text should be correct', () => {
    let action = addPostAC('Incubator')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('Incubator')
})

it('correct length after deleting', () => {
    let action = deletePost(2)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})
