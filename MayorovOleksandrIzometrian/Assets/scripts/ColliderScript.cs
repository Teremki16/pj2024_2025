using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class ColliderScript : MonoBehaviour
{
    private void Awake()
    {
        GetComponent<TilemapRenderer>().enabled = false;
    }
}