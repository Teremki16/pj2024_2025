using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundController : MonoBehaviour
{
    [SerializeField] float speed;
    

    void Update()
    {
        transform.Translate(Vector2.left * speed);
        if (transform.position.x < -30f)
        {
            transform.Translate(new Vector3(30f, transform.position.y,
                transform.position.z));
        }
        }
    }
