// src/types/next-types.ts
import { Metadata, ResolvingMetadata } from 'next';

// Modify PageProps to use a more flexible approach
export type PageProps<T extends { params: Record<string, string> }> = {
  params: T['params'];
};

// Modify MetadataGenerator to be more flexible
export type MetadataGenerator<T extends { params: Record<string, string> }> = (
  context: { 
    params: T['params'];
    searchParams?: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
) => Promise<Metadata>;