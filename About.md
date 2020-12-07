# About DNA digital data storage

> **DNA digital data storage** is the process of encoding and decoding binary data to and from synthesized strands of DNA

> Its practical use is currently severely limited because of its high cost and very slow read and write times.



## Two ways to read and write infromation by DNA

### 1) Illumina, Inc. (Most wide spread)

It involves immobilization of single stranded DNA on a solid support, polymerase chain reaction(PCR) amplification of the sequences, and labeling of the individual DNA bases with complementary bases tagged with fluorescent* markers. The fluorescence pattern (a different color for each of the four DNA bases) can then be captured in an image and processed to determine the DNA sequence.

### 2) Nanopore Technology

DNA molecules are passed through a nano scale pore* under the control of a ratcheting* enzyme*. The passage of the DNA molecules causes small change in electrical current that can be measured. The main advantage of the nanopore technology is that it can be read in real time.

However the read accuracy of this technology is currently insufficient for data storage.



## History

### - 1959 Richard P.Feynman, Physicist

In "There's Plenty of Room at the Bottom: An Invitation to Enter a New Field of Physics" outlined the general prospects for the creation of artificial objects similar to objects of the microcosm (including biological) and having similar or even more extensive capabilities.

### - 1964-65 Mikhail Samoilovich Neiman, Soviet physicist

Published 3 articles about microminiaturization in electronics at the molecular-atomic level, which independently presented general considerations and some calculations regarding the possibility of recording, storage, and retrieval of information on synthesized DNA and RNA molecules.

### - 1988 Joe Davis And Researchers from Harvard

One of the earliest uses of DNA storage occurred. A image sotred in a DNA sequence in E.coli, was organized in a 5 x 7 matrix that, once decoded, formed a picture of an ancient Germanic rune representing life and the female Earth. In the matrix, ones corresponded to dark pixels while zeros corresponded to light pixels. 

### - 2007 University of Arizona

A device was created to use addressing molecules to encode mismatch sites within a DNA strand. These mismatches were then able to be read out by performing a restriction digest, thereby recovering the data.

### - 2011 George Church, Sri Kosuri, and Yuan Gao

Carried out an experiment that would encode a 659-kb book that was co-authored by Church. To do this, the research team did **a two-to-one correspondence where a binary zero was represented by either an adenine or cytosine and a binary one was represented by a guanine or thymine**. After examination, 22 errors were found in the DNA.

### - 2012 George Church and colleagues at Harvard University

DNA was encoded with digital information that included an HTML draft of a 53,400 word book written by the lead researcher, eleven JPG images and one JavaScript program. Multiple copies for redundancy were added and 5.5 petabits can be stored in each cubic millimeter of DNA. **researchers used a simple code where bits were mapped one-to-one with bases, which had the shortcoming that it led to long runs of the same base, the sequencing of which is error-prone.** This result showed that besides its other functions, DNA can also be another type of storage medium such as hard drives and magnetic tapes.

### - 2013 European Bioinformatics Institute (EBI)

Used a new way to ensure all the DNA files reproduced the information between 99.99% and 100% accuracy. **The main innovations in this research were the use of an error-correcting encoding scheme to ensure the extremely low data-loss rate, as well as the idea of encoding the data in a series of overlapping short oligonucleotides* identifiable through a sequence-based indexing scheme.** Also, the sequences of the individual strands of DNA overlapped in such a way that each region of data was repeated four times to avoid errors.

### - 2013 DNACloud

It was developed by Manish K. Gupta and co-workers to encode computer files to their DNA representation. **It implements a memory efficiency version of the algorithm proposed by Goldman et al. to encode (and decode) data to DNA (.dnac files)**.

### - 2015 ETH Zurich

The team added redundancy via [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed–Solomon_error_correction) coding and by encapsulating the DNA within silica glass spheres via [Sol-gel](https://en.wikipedia.org/wiki/Sol-gel) chemistry.

### - 2016 Church and Technicolor Research and Innovation

To published in which, 22 MB of a MPEG compressed movie sequence were stored and recovered from DNA. **The recovery of the sequence was found to have zero errors.** [An article is Forward Error Correction for DNA Data Storage](https://github.com/ZhangYizhe/DNADigitalDataStorage/blob/main/Reference/Forward%20Error%20Correction%20for%20DNA%20Data%20Storage.pdf).

### - 2017 Yaniv Erlich and Dina Zielinski of Columbia University

Published a method known as DNA Fountain that stored data at a density of 215 petabytes per gram of DNA. The technique approaches the Shannon capacity of DNA storage, achieving 85% of the theoretical limit.

### - March 2018 Microsoft and University of Washington

Published results demonstrating storage and retrieval of approximately 200MB of data. The research also proposed and evaluated a method for random access of data items stored in DNA. **In March 2019, the same team announced they have demonstrated a fully automated system to encode and decode data in DNA.**

### - January 2019 Eurecom and Imperial College

Demonstrated the ability to store structured data in synthetic DNA. The research showed how to encode structured or, more specifically, relational data in synthetic DNA and also demonstrated how to perform data processing operations (similar to SQL) directly on the DNA as chemical processes.

### - April 2020

The first article describing data storage on native DNA sequences via enzymatic nicking was published. In the paper, scientists demonstrate a new method of recording information in DNA backbone which enables bit-wise random access and in-memory computing.



## Reference

fluorescent - producing bright light by using some forms of radiation.

pore - one of the very small holes in your skin that sweat can pass through; one of the similar small holes in the surface of a plant or a rock .

ratcheting -  In a tool or machine, a ratchet is a wheel or bar with sloping teeth, which can move only in one direction, because a piece of metal stops the teeth from moving backward. 

enzyme -  a substance, produced by all living things, which helps a chemical change happen or happen more quickly, without being changed itself.

oligonucleotides - N a polymer consisting of a small number of nucleotides.