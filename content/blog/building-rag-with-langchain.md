---
title: "Building RAG Systems with LangChain"
description: "Learn how to build a Retrieval Augmented Generation (RAG) system using LangChain and integrate it with your documentation."
date: "2024-01-10"
image: "/images/blog/rag-langchain.jpg"
readingTime: 15
featured: true
author:
  name: "Jai Mansukhani"
  avatar: "/images/authors/jai.jpg"
---

# Building RAG Systems with LangChain

Retrieval Augmented Generation (RAG) is a powerful technique that enhances Large Language Models (LLMs) by providing them with relevant context from your documentation. In this tutorial, we'll learn how to build a RAG system using LangChain.

## What is RAG?

RAG combines the power of retrieval systems with generative AI. Instead of relying solely on the LLM's training data, RAG retrieves relevant documents from your knowledge base and uses them as context for generating responses.

## Setting Up LangChain

First, install the required dependencies:

```bash
npm install langchain @langchain/openai
```

## Creating the Document Store

Let's create a simple document store using LangChain's document loaders:

```typescript
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";

const loader = new DirectoryLoader(
  "./docs",
  {
    ".txt": (path) => new TextLoader(path),
  }
);

const docs = await loader.load();
```

## Setting Up the Vector Store

Next, we'll create embeddings and store them in a vector database:

```typescript
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OpenAIEmbeddings();
const vectorStore = await MemoryVectorStore.fromDocuments(
  docs,
  embeddings
);
```

## Creating the RAG Chain

Now we can create a RAG chain that combines retrieval with generation:

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(`
Answer the following question using only the provided context. If you cannot
answer the question with the context, say "I don't have enough information."

Context: {context}

Question: {input}
`);

const model = new ChatOpenAI({
  modelName: "gpt-4",
  temperature: 0.7,
});

const documentChain = await createStuffDocumentsChain({
  llm: model,
  prompt,
});

const retriever = vectorStore.asRetriever();
const retrievalChain = await createRetrievalChain({
  combineDocsChain: documentChain,
  retriever,
});
```

## Using the RAG System

Finally, we can use our RAG system to answer questions:

```typescript
const response = await retrievalChain.invoke({
  input: "How do I deploy to production?",
});

console.log(response.answer);
```

## Best Practices

1. **Document Chunking**: Choose appropriate chunk sizes for your documents. Too large chunks can dilute relevance, while too small chunks might lose context.

2. **Embeddings**: Use embeddings that are appropriate for your domain. OpenAI's embeddings work well for general text, but you might want specialized embeddings for technical documentation.

3. **Prompt Engineering**: Carefully design your prompts to guide the model in using the retrieved context effectively.

4. **Evaluation**: Regularly evaluate your RAG system's performance using metrics like relevance and answer accuracy.

## Conclusion

RAG is a powerful way to enhance LLMs with your own documentation. By following this tutorial, you've learned how to:

- Set up a document store with LangChain
- Create embeddings and store them in a vector database
- Build a RAG chain that combines retrieval and generation
- Use the system to answer questions about your documentation

For more advanced topics, check out LangChain's documentation on streaming responses, custom retrievers, and advanced RAG patterns.