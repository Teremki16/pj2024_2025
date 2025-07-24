using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundController : MonoBehaviour
{
    [SerializeField] float speed;

    void Update()
    {
        transform.Translate(Vector2.left * speed);
        if(transform.position.x < -10f)
        {
            transform.Translate(new Vector3(10f, transform.position.y,
                transform.position.z));
        }
    }
}
