import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"

export default function MyFiles({ data }) {
    console.log(data) 

    return (
        <Layout>       
            
        <div>Hello world</div>
        <ul>
        {data.allFile.edges.map(
            ({node}, index) => (
                <li>
                    ID: {node.id} - Name: {node.name}
                </li>
            )
            )
        }
        </ul>
        </Layout>
    )
}



export const query = graphql`
    query MyQuery {
        allFile {
        edges {
            node {
            id
            name
            accessTime
            relativePath
            publicURL        
            }
        }
        }
    }
`