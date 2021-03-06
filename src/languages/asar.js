/*
Language: 65c816 Assembly (Asar)
Author: Telinc1 <telinc@telinc1.com>
Description: 65c816 ASM and related syntax for the Asar assembler
*/

export default function(hljs) {
    return {
        name: "65c816 Assembly (Asar)",
        case_insensitive: true,
        keywords: {
            keyword: "lorom|10 hirom exlorom exhirom sa1rom|10 fullsa1rom sfxrom norom macro endmacro incbin incsrc fillbyte fillword filllong filldword fill pad padbyte padword padlong paddword table cleartable skip namespace import print org warnpc base on off freespaceuse hex freespace|10 freecode|10 freedata|10 ram noram align cleaned static autoclean autoclear prot pushpc pullpc function if else elseif endif assert arch 65816 spc700 spc700-inline superfx math pri round warn xkas bank noassume auto asar include includefrom error warn skip double round pushtable pulltable db dw dl dd",
            built_in: "read1|10 read2|10 read3|10 read4|10 canread1 canread2 canread4 sqrt sin cos tan asin acos atan arcsin arccos arctan log log10 log2 _read1 _read2 _read3 _read4 _canread1 _canread2 _canread4 _sqrt _sin _cos _tan _asin _acos _atan _arcsin _arccos _arctan _log _log10 _log2 readfile1 _readfile1 readfile2 _readfile2 readfile3 _readfile3 readfile4 _readfile4 canreadfile1 _canreadfile1 canreadfile2 _canreadfile2 canreadfile3 _canreadfile3 canreadfile4 _canreadfile4 canreadfile _canreadfile snestopc|10 _snestopc pctosnes|10 _pctosnes max _max min _min clamp _clamp safediv _safediv select _select not _not equal _equal notequal _notequal less _less lessequal _lessequal greater _greater greaterequal _greaterequal and _and or _or nand _nand nor _nor xor _xor"
        },
        contains: [
            {
                className: "keyword",
                begin: "\\b(adc|and|asl|bcc|blt|bcs|bge|beq|bit|bmi|bne|bpl|bra|brk|brl|bvc|bvs|clc|cld|cli|clv|cmp|cop|cpx|cpy|dec|dea|dex|dey|eor|inc|ina|inx|iny|jmp|jml|jsr|jsl|lda|ldx|ldy|lsr|mvn|mvp|nop|ora|pea|pei|per|pha|phb|phd|phk|php|phx|phy|pla|plb|pld|plp|plx|ply|rep|rol|ror|rti|rtl|rts|sbc|sec|sed|sei|sep|sta|stp|stx|sty|stz|tax|tay|tcd|tcs|tdc|trb|tsc|tsb|tsx|txa|txs|txy|tya|tyx|wai|wdm|xba|xce)(\\.(b|w|l))?\\b",
                end: "\\s",
                relevance: 5
            },
            // lines ending with ; aren't really comments, probably auto-detect fail
            hljs.COMMENT(";(?!\s*$)", "$"),
            {
                className: "string",
                begin: '"',
                end: '"',
                relevance: 0
            },
            {
                className: "number",
                variants: [
                    {begin: "#?-?\\$[0-9a-f]+"},	// hex
                    {begin: "#?-?%[01]+"},			// bin
                    {begin: "\\b-?\\d+"}			// dec
                ],
                relevance: 0
            },
            {
                className: "symbol",
                variants: [
                    {begin: "[a-z_][a-z0-9_]*:"},	// label
                    {begin: "![a-z0-9_]+"},			// define
                    {begin: "%[a-z_][a-z0-9_]*"},	// macro
                    {begin: "<[a-z_][a-z0-9_]*>"}	// macro parameter
                ]
            }
        ],
        illegal: "\/"
    };
}
