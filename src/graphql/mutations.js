/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
  }
}
`;
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
  }
}
`;
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    message
    ownerID
    description
    createdAt
    owner
    postAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    message
    ownerID
    description
    createdAt
    owner
    postAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    message
    ownerID
    description
    createdAt
    owner
    postAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    post {
      id
      message
      ownerID
      description
      createdAt
      owner
      postAuthor {
        id
        owner
        authID
        firstName
        lastName
        username
        phone
        email
        instrument
      }
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    post {
      id
      message
      ownerID
      description
      createdAt
      owner
      postAuthor {
        id
        owner
        authID
        firstName
        lastName
        username
        phone
        email
        instrument
      }
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    post {
      id
      message
      ownerID
      description
      createdAt
      owner
      postAuthor {
        id
        owner
        authID
        firstName
        lastName
        username
        phone
        email
        instrument
      }
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    owner
    authID
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    instrument
    wallPost {
      items {
        id
        message
        title
      }
      nextToken
    }
    userpost {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    owner
    authID
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    instrument
    wallPost {
      items {
        id
        message
        title
      }
      nextToken
    }
    userpost {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    owner
    authID
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    instrument
    wallPost {
      items {
        id
        message
        title
      }
      nextToken
    }
    userpost {
      items {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const createUserWallPost = `mutation CreateUserWallPost($input: CreateUserWallPostInput!) {
  createUserWallPost(input: $input) {
    id
    message
    title
    userWallPost {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const updateUserWallPost = `mutation UpdateUserWallPost($input: UpdateUserWallPostInput!) {
  updateUserWallPost(input: $input) {
    id
    message
    title
    userWallPost {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const deleteUserWallPost = `mutation DeleteUserWallPost($input: DeleteUserWallPostInput!) {
  deleteUserWallPost(input: $input) {
    id
    message
    title
    userWallPost {
      id
      owner
      authID
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      instrument
      wallPost {
        nextToken
      }
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
