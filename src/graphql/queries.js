/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        message
        ownerID
        description
        createdAt
        owner
        title
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
        instrument
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUserWallPost = `query GetUserWallPost($id: ID!) {
  getUserWallPost(id: $id) {
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
export const listUserWallPosts = `query ListUserWallPosts(
  $filter: ModelUserWallPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserWallPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        instrument
      }
    }
    nextToken
  }
}
`;
export const searchBlogs = `query SearchBlogs(
  $filter: SearchableBlogFilterInput
  $sort: SearchableBlogSortInput
  $limit: Int
  $nextToken: Int
) {
  searchBlogs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchPosts = `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: SearchablePostSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
