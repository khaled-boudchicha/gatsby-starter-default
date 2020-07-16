const _ = require(`lodash`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)
const axios = require('axios')
const crypto = require('crypto')
const fs = require('fs')


exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allAssetsJson {
              edges {
                node {
                  data {
                    title
                    pathName
                    models {
                      id
                      name
                      title
                      color
                      description
                      gallerie
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }
        const detailTemplate = path.resolve(`src/templates/item.js`)

        const { data } = result.data.allAssetsJson.edges[0].node

        data.forEach((element, i) => {
          element.models.forEach(el => {
            createPage({
              path: `/models/${element.pathName}/${el.name}`,
              component: slash(detailTemplate),
              context: {
                item: Number(`${el.id}${i}`),
                itemPrefix: `${element.pathName}-${el.id}`,
                imgPath: `new-sym/${element.pathName}/${el.id}/${el.name}.jpg`,
                jsonData: el,
                colorPath: `new-sym/${element.pathName}/${el.id}/colors`,
                galleryPath: `new-sym/${element.pathName}/${el.id}/gallery`,
              },
            })
          })
        })
        return
      })
    )
  })
}
