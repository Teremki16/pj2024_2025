using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TouchingObjects : MonoBehaviour
{
    int health = 5;
    Transform spawnpPoint;
    Rigidbody2D rb;

    private void Awake()
    {
        spawnpPoint = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int value)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = spawnpPoint.position;
        health -= value;
        if(health <= 0)
        {
            Debug.Log("YA VMER");
        }
    }
}
