/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      items {
        message
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
    message
    description
    createdAt
    owner
    author {
      id
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
      userpost {
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
      message
      description
      createdAt
      owner
      author {
        id
        firstName
        lastName
        username
        phone
        email
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
      message
      description
      createdAt
      owner
      author {
        id
        firstName
        lastName
        username
        phone
        email
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
        message
        description
        createdAt
        owner
        title
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
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
    userpost {
      items {
        message
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
      userpost {
        nextToken
      }
    }
    nextToken
  }
}
`;
