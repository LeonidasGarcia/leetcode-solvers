# 647. palindromic-substrings

**Difficulty:** Medium

**URL:** https://leetcode.com/problems/palindromic-substrings/

**Topics:** Senior Staff, Two Pointers, String, Dynamic Programming

## Problem

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

## Approach

Se implementa el algoritmo de Manacher con complejidad O(n).

Explicación rápida del algoritmo: El algoritmo utiliza una versión normalizada de la cadena introducida (Por ejemplo si recibimos "aaa" entonces la normalización será "#a#a#a#") para recorrer cada string de la misma.

Utilizando un array de radios (P) y dos variables de control de frontera que representan índices de la cadena (C = centro, R = Derecha) el algoritmo recorre cada posición de la cadena evaluando lo siguiente: Si i < R entonces el algoritmo intentará salvar
trabajo tomando un valor simétricamente opuesto a la posición actual. Si la condición no se cumple entonces el algoritmo no
otorgará ayudas. Luego de eso, el algoritmo intentará expandir hacia ambos lados la cadena actual para buscar palindromos.

Una vez terminado, el algoritmo debe revisar que el nuevo palindromo no haya excedido la frontera actual de lo contrario deberá
actualizarla.

Finalmente, el algoritmo utilizará la lista de radios para devolver la cantidad final de palíndromos en la cadena (utilizando divisón entera con el 2)
