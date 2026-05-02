# 268. missing-number

**Difficulty:** Easy

**URL:** https://leetcode.com/problems/missing-number/

**Topics:** Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting

## Problem

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

## Approach

Utilizando la suma gaussiana obtenemos una complejidad de O(n). Sabemos que siempre echaremos en falta un numero, entonces
Podemos utilizar la suma de los n primeros numeros naturales y restar la suma de los numeros de la lista dada obteniendo asi
el numero faltante directamente.

En la implementación, me deshice de la división para acelerar el tiempo de ejecución
