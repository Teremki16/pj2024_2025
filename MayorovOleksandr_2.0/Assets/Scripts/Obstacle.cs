using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstacle : MonoBehaviour
{
    [SerializeField] float levelSpeed = 0.6f;
    void Update()
    {
        transform.Translate(Vector2.left * levelSpeed); 
    }
}
