using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleScript : MonoBehaviour
{
    [SerializeField] float levelSpeed = 0.06f;
    void FixedUpdate()
    {
        transform.Translate(Vector2.left * levelSpeed);
        if(transform.position.x < -10f)
        {
            Destroy(gameObject);
        }
    }
}
