using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundController : MonoBehaviour
{
   [SerializeField] float speed;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector2.left * speed);
        if (transform.position.x < -35f)
        {
            transform.Translate(new Vector3(35f, transform.position.y, transform.position.z));
        }
    }
}
